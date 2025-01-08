import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Prodcuto } from '../Producto'; // Corrige el nombre de la clase o interfaz
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-catalog',
  templateUrl: './mini-catalog.component.html',
  styleUrls: ['./mini-catalog.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] 
})
export class MiniCatalogComponent implements OnInit {
  productos: Prodcuto[] = []; 
  filteredProductos: Prodcuto[] = [];

  disponibilidad = false;
  precioMaximo = 0;

  constructor(private productoService: ProductoService) {} 

  ngOnInit(): void {
    this.productoService.getData().subscribe({
      next: (response) => {
        this.productos = response;
        this.filteredProductos = response; 
      },
      error: (error) => {
        console.error('Error en la solicitud', error);
      }
    });
  }

  aplicarFiltros(): void {
    this.filteredProductos = this.productos.filter((producto: Prodcuto) => {
      return (
        (this.disponibilidad ? producto.stockProducto > 0 : true) &&
        (this.precioMaximo ? producto.precioProducto <= this.precioMaximo : true)
      );
    });
  }
}