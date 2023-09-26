import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private apiUrl = 'http://localhost:3000/contatos'; // Certifique-se de que o URL esteja correto

  constructor(private http: HttpClient) {}

  getContatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  criarContato(contato: any): Observable<any> {
    return this.http.post(this.apiUrl, contato);
  }

  atualizarContato(id: number, contato: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contato);
  }

  excluirContato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getContato(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
