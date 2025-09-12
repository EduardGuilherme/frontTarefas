import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'https://localhost:7042/api/Tarefa';

  constructor(private http: HttpClient) {}

  getTarefas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTarefasByStatus(status: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/status/${status}`);
  }

  getTarefasByUsuario(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }

  addTarefa(tarefa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarefa);
  }

  updateTarefa(id: number, tarefa: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, tarefa);
}

  deleteTarefa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}?id=${id}`);
  }
}
