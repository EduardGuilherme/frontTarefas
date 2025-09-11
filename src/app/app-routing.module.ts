import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'tarefas', component: TarefaComponent },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
