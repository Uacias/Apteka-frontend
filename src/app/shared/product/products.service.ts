import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:8080/produkty/';

  constructor(private readonly http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}getAll`, {});
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}${id}`, {});
  }

  addProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.url}add/${id}`, product, {});
  }

  editProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}${id}`, product, {});
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.url}${id}`, {});
  }
}
