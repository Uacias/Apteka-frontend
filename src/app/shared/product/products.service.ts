import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, productType } from './product';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { IProductBasket } from './product-basket';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url: string = 'http://localhost:8080/produkty/';
  private products: IProduct[] = [];
  private bestSellersSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<
    IProduct[]
  >([]);
  private healthWellnessProducts: IProduct[] = [];
  private vitaminsProducts: IProduct[] = [];
  private supplementsProducts: IProduct[] = [];
  private beautyProducts: IProduct[] = [];
  private pharmacyProducts: IProduct[] = [];
  private basketProducts: IProductBasket[] = [];
  isBasketOpen: Observable<boolean> = of(false);

  constructor(private readonly http: HttpClient) {}

  isBasketEmpty(): boolean {
    return this.basketProducts.length === 0;
  }

  clearBasket(): void {
    this.basketProducts = [];
  }

  toggleBasket(): void {
    this.isBasketOpen = this.isBasketOpen.pipe(map((isOpen) => !isOpen));
    console.log(this.isBasketOpen);
  }

  addToBasket(product: IProductBasket) {
    const existingProduct = this.basketProducts.find(
      (p) => p.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      existingProduct.totalPrice += product.totalPrice;
    } else {
      this.basketProducts.push(product);
    }
  }

  removeFromBasket(product: IProductBasket) {
    const index = this.basketProducts.findIndex((p) => p.id === product.id);
    this.basketProducts.splice(index, 1);
  }

  getBasketProducts(): IProductBasket[] {
    return this.basketProducts;
  }

  getBasketTotalPrice(): number {
    return this.basketProducts.reduce(
      (totalPrice, product) => totalPrice + product.totalPrice,
      0
    );
  }

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

  getProductByType(type: productType): Observable<IProduct[]> {
    switch (type) {
      case productType.HEALTHWELLNESS:
        if (this.healthWellnessProducts.length > 0) {
          return of(this.healthWellnessProducts);
        } else {
          return this.http
            .get<IProduct[]>(`${this.url}typProduktu/${type}`)
            .pipe(
              tap((products) => {
                this.healthWellnessProducts = products;
              })
            );
        }
      case productType.VITAMINS:
        if (this.vitaminsProducts.length > 0) {
          return of(this.vitaminsProducts);
        } else {
          return this.http
            .get<IProduct[]>(`${this.url}typProduktu/${type}`)
            .pipe(
              tap((products) => {
                this.vitaminsProducts = products;
              })
            );
        }
      case productType.SUPPLEMENTS:
        if (this.supplementsProducts.length > 0) {
          return of(this.supplementsProducts);
        } else {
          return this.http
            .get<IProduct[]>(`${this.url}typProduktu/${type}`)
            .pipe(
              tap((products) => {
                this.supplementsProducts = products;
              })
            );
        }
      case productType.BEAUTY:
        if (this.beautyProducts.length > 0) {
          return of(this.beautyProducts);
        } else {
          return this.http
            .get<IProduct[]>(`${this.url}typProduktu/${type}`)
            .pipe(
              tap((products) => {
                this.beautyProducts = products;
              })
            );
        }
      case productType.PHARMACY:
        if (this.pharmacyProducts.length > 0) {
          return of(this.pharmacyProducts);
        } else {
          return this.http
            .get<IProduct[]>(`${this.url}typProduktu/${type}`)
            .pipe(
              tap((products) => {
                this.pharmacyProducts = products;
              })
            );
        }
      default:
        return of([]);
    }
  }
}
