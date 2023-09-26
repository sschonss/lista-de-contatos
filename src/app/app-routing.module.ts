import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';

const routes: Routes = [
  { path: '', component: ListaContatosComponent },
  { path: 'adicionar', component: AdicionarContatoComponent },
  { path: 'editar/:id', component: EditarContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
