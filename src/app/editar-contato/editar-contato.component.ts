import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from '../contato.service';

interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.css'],
})
export class EditarContatoComponent implements OnInit {
  contato: Contato = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
  };

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null && !isNaN(id)) {
      this.contatoService.getContato(id).subscribe((data: Contato) => {
        if (data) {
          data.telefone = this.formatarTelefone(data.telefone);
          data.nome = this.formatarNome(data.nome);
          this.contato = data;
        } else {
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  atualizarContato(): void {
    if (this.validarContato(this.contato)) {
      this.contatoService
        .atualizarContato(this.contato.id, this.contato)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      alert('Dados inválidos!');
    }
  }

  private validarContato(contato: Contato): boolean {
    return (
      this.verificaNome(contato.nome) &&
      this.verificaEmail(contato.email) &&
      this.verificaTelefone(contato.telefone)
    );
  }

  private verificaEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private verificaTelefone(telefone: string): boolean {
    return telefone.length >= 8;
  }

  private verificaNome(nome: string): boolean {
    return nome.trim().length >= 3;
  }

  private formatarTelefone(telefone: string): string {
    const regex8Digitos = /^(\d{4})(\d{4})$/;
    const regex9Digitos = /^(\d{5})(\d{4})$/;

    if (telefone.length === 8) {
      return telefone.replace(regex8Digitos, '$1-$2');
    } else if (telefone.length === 9) {
      return telefone.replace(regex9Digitos, '$1-$2');
    } else {
      return telefone;
    }
  }

  private formatarNome(nome: string): string {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  }
}
