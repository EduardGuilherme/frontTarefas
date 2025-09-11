import { Component,OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  tarefas: any[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe(data => {
      this.tarefas = data;
    });
  }
}