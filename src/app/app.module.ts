import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContatosComponent,
    AdicionarContatoComponent,
    EditarContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Adicione FormsModule aqui
    HttpClientModule, // Adicione HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
