import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../models/users.model';
import { environment } from '../../environments/environment';

const baseUrl = environment.APIEndpoint;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Users[]>(baseUrl + 'users/');
  }

  getAllToDel() {
    return this.http.get<Users[]>(baseUrl + 'users/');
  }

  getAllToUp() {
    return this.http.get<Users[]>(baseUrl + 'users/');
  }
  
  createUser(user: Users) {
    return this.http.post<Users>(baseUrl + 'createuser/', user);
  }

  updateUser(user : Users) {
    return this.http.put<Users>(baseUrl + 'updateuser/' + user.id, user)
  }

  delUser(id : Number) {
    return this.http.delete<Users>(baseUrl + 'deleteuser/' + id)
  }
}
