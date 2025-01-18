import { Component, OnInit } from '@angular/core';
import { Prodcuto } from '../Producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from "../reviews/reviews.component";

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css'],
  standalone: true,
  imports: [CommonModule, ReviewsComponent]
})
export class ProductoDetailComponent implements OnInit {

  // Producto sea cual sea
  producto: Prodcuto | null = null;
  //Cantidad a agregar al carrito
  cantidadCarrito: number = 0;



  constructor(private route: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    const id =  Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProductoById(id).subscribe((data) => {
      this.producto = data;
    })
  }

  agregarAlCarrito() {
    console.log('Producto añadido al carrito:', this.producto?.nombreProducto, this.cantidadCarrito);
  }

  agregarStock(){
    if (this.cantidadCarrito < 40){

      this.cantidadCarrito += 1;

    }
    else{
      alert('Hable con nuestros socios para compras mayores de 40 swimsports00@gmail.com')
    }
    
    

  }
  disminuirStock(){

    if (this.cantidadCarrito > 0)
      this.cantidadCarrito -= 1

    else{
      alert('lamentablemente por las leyes del universo no podemos entregarte -1 unidad lo siento')
    }

  }

}
