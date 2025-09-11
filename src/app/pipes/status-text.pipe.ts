import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusText'
})
export class StatusTextPipe implements PipeTransform {
  transform(value: number): string {
    switch(value) {
      case 1: return 'A fazer';
      case 2: return 'Em Andamento';
      case 3: return 'Concluído';
      default: return 'Desconhecido';
    }
  }
}
