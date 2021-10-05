import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})

export class ProductsService {
  private BASE_URL = "http://192.168.100.146:8080";

  constructor(private http: HttpClient) {}

  // getProductos(): Observable<any> {
  //   return this.http.get(`${this.BASE_URL}/list`);
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL + "/list");
  }

  /** GET user by id. Will 404 if id not found */
  /*  getUser(id: number): Observable<any> {
    const url = `${this.userUrl}/user/${id}`;
    return this.http.get<User>(url);
  }
   */
  /** POST: add a new user to the server */
  addProduct(product: Product) {
    //console.log(user);
    return this.http.post(this.BASE_URL + "/add", product, httpOptions);
  }

  /** PUT: update the user on the server */
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.BASE_URL + "/update", product, httpOptions);
  }

  /** DELETE: delete the user from the server */
  deleteProduct(product: Product | number) {
    if (confirm("¿Está seguro que quiere eliminar?")) {
      const id = typeof product === "number" ? product : product.id;
      const url = `${this.BASE_URL}/delete/${id}`;
      return this.http.delete(url, httpOptions);
    }
    return of({});
  }
}
