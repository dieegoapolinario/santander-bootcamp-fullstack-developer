import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/8bc3abfd-88a9-4164-8611-f87a70b2e081';

  constructor(private httpClient: HttpClient) {}

  //Retorna a lista de usuarios (READ)
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
