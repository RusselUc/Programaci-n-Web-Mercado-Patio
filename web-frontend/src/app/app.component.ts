import { Component} from '@angular/core';
import {Producto} from "./modelos/producto"
import {ProductoService} from './servicios/producto.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productoArray:Producto[] = [];
  constructor(private productoService: ProductoService){
  
  }

  ngOnInit():void {
    this.productoService.getProductos()
    .subscribe(data => {
      console.log(data)
      this.productoArray = data.data;
    },
    error => console.error(error)
    );
  }
}
