import { Component,OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
   tarefas: any[] = [];
  usuarios: any[] = [];
  tarefaForm: FormGroup;
  editingTarefaId: number | null = null;

  statusMap: { [key: number]: string } = {
  1: 'A fazer',
  2: 'Em Andamento',
  3: 'Concluído'
};

  constructor(
    private tarefaService: TarefaService,
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) {
    this.tarefaForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: [1, Validators.required],
      usuarioId: [null]
    });
  }

  ngOnInit(): void {
    this.loadTarefas();
    this.loadUsuarios();
  }

  loadTarefas(): void {
    this.tarefaService.getTarefas().subscribe(data => this.tarefas = data);
  }

  loadUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(data => this.usuarios = data);
  }

  submitTarefa(): void {
  if (this.tarefaForm.valid) {
    if (this.editingTarefaId) {
      this.tarefaService.updateTarefa(this.editingTarefaId, this.tarefaForm.value)
        .subscribe(() => {
          this.tarefaForm.reset({ status: 1, usuarioId: null });
          this.editingTarefaId = null; 
          this.loadTarefas();
        });
    } else {
      this.tarefaService.addTarefa(this.tarefaForm.value)
        .subscribe(() => {
          this.tarefaForm.reset({ status: 1, usuarioId: null });
          this.loadTarefas();
        });
    }
  }
}

  editTarefa(tarefa: any): void {
    this.editingTarefaId = tarefa.id;
    this.tarefaForm.setValue({
      name: tarefa.name,
      description: tarefa.description,
      status: tarefa.status,
      usuarioId: tarefa.usuarioId
    });
  }

  cancelEdit(): void {
    this.editingTarefaId = null;
    this.tarefaForm.reset({ status: 1, usuarioId: null });
  }

  deleteTarefa(id: number): void {
    this.tarefaService.deleteTarefa(id).subscribe(() => this.loadTarefas());
  }
}