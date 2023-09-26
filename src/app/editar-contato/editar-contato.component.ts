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
        this.contato = data;
      });
    } else {
      // Tratar o caso em que 'id' é nulo ou não é um número válido
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
