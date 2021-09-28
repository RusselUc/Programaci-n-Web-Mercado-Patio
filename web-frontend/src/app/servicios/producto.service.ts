import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private BASE_URL = 'http://192.168.71.19:8080'
  constructor(private http:HttpClient) {
  }

  getProductos():Observable<any>{
    return this.http.get(`${this.BASE_URL}/list`)
  }
}
