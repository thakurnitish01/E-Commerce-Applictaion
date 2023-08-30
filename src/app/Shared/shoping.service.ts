import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingService {
   baseUrl = 'http://localhost:3000'
   cart = 'http://localhost:3000/carts'
   
  constructor(private http : HttpClient) { }

  getProducts(): Observable<any>{
   return this.http.get(`${this.baseUrl}/products`)
  }

  getProductDetails(id : string) 
  { 
    const details = `${this.baseUrl}/products/${id}`
    return this.http.get(details)
  }

  addToCart(item : any){
    return this.http.post(`${this.cart}`, item)
  }
  getcart(): Observable<any[]> {
    const url = `${this.baseUrl}/carts`;
    return this.http.get<any[]>(url);
  }
  removeCart(id : string){
    return this.http.delete(`${this.cart}/${id}`)
  }


  clearCart(): Observable<any> {
    return this.http.delete(`${this.cart}`);
  }
  
  
  search(query: string): Observable<any[]> {
    const url = `${this.baseUrl}/search`; 
    return this.http.get<any[]>(url, { params: { query } });
  }
  myOrders(item : any){
    return this.http.post(`${this.baseUrl}/MyOrders`, item)
  }
  uploadFile(fileData: any) {
    return this.http.post(`${this.baseUrl}/files`, { file: fileData });
  }
  getFiles(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/files`)
  }
  
}
