import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css'],
})
export class EditarContatoComponent implements OnInit {
  contato: any = {
    nome: '',
    email: '',
    telefone: '',
  };

  verificaEmail(email: string) {
    if (email.indexOf('@') > -1 && email.indexOf('.') > -1) {
      return true;
    }
    return false;
  }

  verificaTelefone(telefone: string) {
    if (telefone.length < 8) {
      return false;
    }
    return true;
  }

  verificaNome(nome: string) {
    if (nome.length < 3) {
      return false;
    }
    return true;
  }

  formatarTelefone(telefone: string) {
    if (telefone.length === 8) {
      return telefone.replace(/(\d{4})(\d{4})/, '$1-$2');
    } else if (telefone.length === 9) {
      return telefone.replace(/(\d{5})(\d{4})/, '$1-$2');
    } else {
      return telefone;
    }
  }

  formatarNome(nome: string) {
    nome = nome.toLowerCase();
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null && !isNaN(id)) {
      this.contatoService.getContato(id).subscribe((data: any) => {

        data.telefone = this.formatarTelefone(data.telefone);
        data.nome = this.formatarNome(data.nome);
        this.contato = data;
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  atualizarContato() {
    this.contatoService
      .atualizarContato(this.contato.id, this.contato)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
