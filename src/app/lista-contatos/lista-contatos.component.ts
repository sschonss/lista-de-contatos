import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css'],
})
export class ListaContatosComponent implements OnInit {
  
  contatos: any[] = [];

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.contatoService.getContatos().subscribe((data: any) => {
      this.contatos = data;
    });
  }

  excluirContato(id: number) {
    this.contatoService.excluirContato(id).subscribe(() => {
      this.atualizarLista();
    });
  }
}
