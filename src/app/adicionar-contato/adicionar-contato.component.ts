import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.css'],
})
export class AdicionarContatoComponent implements OnInit {
  contato = {
    nome: '',
    email: '',
    telefone: '',
  };

  constructor(private contatoService: ContatoService, private router: Router) {}

  ngOnInit(): void {}

  adicionarContato() {

    if (!this.verificaNome(this.contato.nome)) {
      alert('Nome inválido');
      return;
    }

    if (!this.verificaEmail(this.contato.email)) {
      alert('Email inválido');
      return;
    }

    if (!this.verificaTelefone(this.contato.telefone)) {
      alert('Telefone inválido');
      return;
    }

    this.contato.nome = this.formatarNome(this.contato.nome);
    this.contato.telefone = this.formatarTelefone(this.contato.telefone);

    this.contatoService.criarContato(this.contato).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

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

}
