import { Component } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.css'],
})
export class AdicionarContatoComponent {
  contato = {
    nome: '',
    email: '',
    telefone: '',
  };

  constructor(private contatoService: ContatoService, private router: Router) {}

  adicionarContato(): void {
    if (!this.validarContato()) {
      alert('Dados inválidos!');
      return;
    }

    this.formatarContato();
    this.salvarContato();
  }

  private validarContato(): boolean {
    return (
      this.verificaNome(this.contato.nome) &&
      this.verificaEmail(this.contato.email) &&
      this.verificaTelefone(this.contato.telefone)
    );
  }

  private verificaEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private verificaTelefone(telefone: string): boolean {
    const telefoneRegex = /^\d{8}|\d{9}$/;
    return telefoneRegex.test(telefone);
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

  private formatarContato(): void {
    this.contato.nome = this.formatarNome(this.contato.nome);
    this.contato.telefone = this.formatarTelefone(this.contato.telefone);
  }

  private salvarContato(): void {
    this.contatoService.criarContato(this.contato).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
