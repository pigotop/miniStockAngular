import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './ProductModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost/api';
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers : new HttpHeaders({
      'content-type':'application/json'
    })
  }
  getPorduct() : Observable<ProductModel> {
    return this.http.get<ProductModel>(this.apiUrl + '/product.php');
  }
  gettest() {
    return this.http.get('/assets/data/data1.json');
  }
  save(product:any): Observable<ProductModel>{
    console.log(product);
    return this.http.post<ProductModel>(this.apiUrl + '/save.php', product ,{
      'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}
