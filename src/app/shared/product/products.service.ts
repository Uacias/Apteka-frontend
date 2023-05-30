import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, productType } from './product';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url: string = 'http://localhost:8080/produkty/';
  private products: IProduct[] = [];
  private bestSellersSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<
    IProduct[]
  >([]);

  constructor(private readonly http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    if (this.products.length > 0) {
      return of(this.products);
    } else {
      return this.http.get<IProduct[]>(`${this.url}getAll`).pipe(
        tap((products) => {
          this.products = products;
          const bestSellers = products.slice(0, 3);
          this.bestSellersSubject.next(bestSellers);
        })
      );
    }
  }

  getBestSellers(): Observable<IProduct[]> {
    return this.bestSellersSubject.asObservable();
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}${id}`);
  }

  addProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.url}add/${id}`, product);
  }

  editProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}${id}`, product);
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.url}${id}`);
  }

  getProductByType(type: productType): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}typProduktu/${type}`);
  }
}
