import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    return this.http
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((response) => response.data));
  }
}
