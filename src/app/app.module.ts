import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusTextPipe } from './pipes/status-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    TarefaComponent,
    StatusTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
