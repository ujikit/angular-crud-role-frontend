import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from './products';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	private _url: string = "http://localhost:8888/products";

	constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url);
  }
}
