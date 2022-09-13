import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  // signupUser(user) {
  //   return this.http.post(`${config.apiUrl}/users/signup`, user);
  //  }
}
