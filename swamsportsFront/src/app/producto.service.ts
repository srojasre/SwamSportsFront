import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Prodcuto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

private apiURL = 'http://localhost:8080/api/productos'
  

  constructor(private http: HttpClient) { 

}

  getData(): Observable<Prodcuto[]> {
    return this.http.get<Prodcuto[]>(this.apiURL)
  }



}