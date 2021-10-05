import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.productList = data;
        console.log(this.productList);
      },
      (error) => console.log(error)
    );
  }

  selectedProduct: Product = new Product();

  addOrEdit(): void {
    if (this.selectedProduct.id === null) {
      this.productsService.addProduct(this.selectedProduct).subscribe(
        () => {
          console.log("Producto Agregado");
          this.selectedProduct = new Product();
        },
        (error) => console.log(error)
      );
    } else {
      this.productsService.updateProduct(this.selectedProduct).subscribe(
        () => {
          console.log("Producto Actualizado");
          this.selectedProduct = new Product();
        },
        (error) => console.log(error)
      );
    }

    // if(this.selectedProduct === null) // INSERT
    // {
    //   this.selectedEmployee.id = this.employeeArray.length + 1;
    //   this.employeeArray.push(this.selectedEmployee);
    // }
    // this.selectedEmployee = {id:0, name: '', country: ''};
  }

  // delete(): void
  // {
  //   if(confirm('¿Está seguro que quiere eliminar?'))
  //   {

  //     this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
  //     this.selectedEmployee = {id:0, name: '', country: ''};
  //   }
  // }

  onEdit(product: Product) {
    this.selectedProduct = product;
  }

  onDelete(product: Product) {
    this.productsService.deleteProduct(product).subscribe(
      () => {
        console.log("Producto Eliminado");
        this.selectedProduct = new Product();
      },
      (error) => console.log(error)
    );
  }
}
