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
    const id = idParam !== null ? +idParam : null;

    if (id !== null && !isNaN(id)) {
      this.carregarContato(id);
    } else {
      this.redirecionarParaPaginaInicial();
    }
  }

  carregarContato(id: number): void {
    this.contatoService.getContato(id).subscribe((data: Contato) => {
      if (data) {
        this.contato = {
          ...data,
          telefone: this.formatarTelefone(data.telefone),
          nome: this.formatarNome(data.nome),
        };
      } else {
        this.redirecionarParaPaginaInicial();
      }
    });
  }

  atualizarContato(): void {
    if (this.ehContatoValido(this.contato)) {
      this.contatoService
        .atualizarContato(this.contato.id, this.contato)
        .subscribe(() => this.redirecionarParaPaginaInicial());
    } else {
      alert('Dados inválidos!');
    }
  }

  ehContatoValido(contato: Contato): boolean {
    return (
      this.validarNome(contato.nome) &&
      this.validarEmail(contato.email) &&
      this.validarTelefone(contato.telefone)
    );
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validarTelefone(telefone: string): boolean {
    return telefone.length >= 8;
  }

  validarNome(nome: string): boolean {
    return nome.trim().length >= 3;
  }

  formatarTelefone(telefone: string): string {
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

  formatarNome(nome: string): string {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  }

  redirecionarParaPaginaInicial(): void {
    this.router.navigate(['/']);
  }
}
