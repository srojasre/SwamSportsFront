import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:8080/api/usuario';
  private tokenKey = 'authToken';



constructor(private http: HttpClient) { }



  login(nombreUsuario: string, contrasenia: string): Observable<string>{

    const loginRequest = {nombreUsuario, contrasenia}
    return this.http.post<string>(`${this.baseURL}/login`, loginRequest)

  }
  logout():void{
    localStorage.removeItem(this.tokenKey)
  }
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }



}
