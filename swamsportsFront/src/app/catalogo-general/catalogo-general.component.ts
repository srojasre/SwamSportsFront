import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodcuto } from '../Producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-catalogo-general',
  templateUrl: './catalogo-general.component.html',
  styleUrls: ['./catalogo-general.component.css'],
   standalone: true,
    imports: [CommonModule, FormsModule] 
})
export class CatalogoGeneralComponent implements OnInit {


  productos: Prodcuto[] = []; 

  itemsVisible = 3; 


  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getData().subscribe({
      next: (response) => {
        this.productos = response;
      },
      error: (error) => {
        console.error('Error en la solicitud', error);
      }
    });
  }

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.productos.length - this.itemsVisible) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Opcional: reiniciar al inicio
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.productos.length - this.itemsVisible; // Opcional: ir al final
    }
  }

  verMas() {
    // Implementa la funcionalidad "Ver más" aquí
  }

}
