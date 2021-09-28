import { Component, OnInit } from '@angular/core';
import {Producto} from './../modelos/producto'
import {ProductoService} from './../servicios/producto.service'

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  productoArray:Producto[] = [];
  constructor(private productoService: ProductoService){
  
  }

  ngOnInit():void {
    this.productoService.getProductos()
    .subscribe(data => {
      console.log(data)
      this.productoArray = data;
      console.log(this.productoArray)
    },
    error => console.log(error)
    );
  }
}