import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


const AUTH_API = 'https://shopapinew.azurewebsites.net/api/Account/';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

 signup(name:string, surname: string, email:string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
      name,
      surname,
      email,
      password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
