import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/8bc3abfd-88a9-4164-8611-f87a70b2e081';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) {}

  //Retorna a lista de usuarios (READ)
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Salva usuario no banco (CREATE)
  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Excluir o usuario do banco (DELETE)
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }
}
