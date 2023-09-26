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
    this.contatoService.criarContato(this.contato).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
