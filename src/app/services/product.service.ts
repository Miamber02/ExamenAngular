import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  historial: string[] = [];

  constructor(private http: HttpClient) {
  if (typeof localStorage !== 'undefined') {
    this.historial = JSON.parse(localStorage.getItem("historialLocal") || '[]');
  } else {
    console.error('localStorage is not available.');
  }
  }

  private baseURL = 'https://fakestoreapi.com/products';

  postmanPetitionProductsList():Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL)
  }

  postmanPetitionOneProduct(id:number):Observable<Product | null> {
    return this.http.get<Product>(this.baseURL + '/' + id)
  }
}