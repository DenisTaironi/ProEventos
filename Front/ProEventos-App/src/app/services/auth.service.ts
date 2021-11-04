import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.apiURL + 'api/user';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {}

  login(model: any): any{
    return this.http.post(`${this.baseURL}/login`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user){
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      }));
  }

  register(model: any): any{
    return this.http.post(`${this.baseURL}/register`, model);
  }

  loggedIn(): any{
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
