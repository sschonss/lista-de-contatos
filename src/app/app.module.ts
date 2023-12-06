import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { AdicionarContatoComponent } from './adicionar-contato/adicionar-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ButtonActionComponent } from './button-action/button-action.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    ListaContatosComponent,
    AdicionarContatoComponent,
    EditarContatoComponent,
    ButtonActionComponent,
    HeaderComponent,
    FooterComponent,
    BackButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Adicione FormsModule aqui
    HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}), // Adicione HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
