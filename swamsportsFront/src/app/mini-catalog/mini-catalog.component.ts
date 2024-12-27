import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { response } from 'express';
import { Prodcuto } from '../Producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-catalog',
  templateUrl: './mini-catalog.component.html',
  styleUrls: ['./mini-catalog.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class MiniCatalogComponent implements OnInit {
  productos: Prodcuto[]=[];


  constructor(private producto: ProductoService) { }

  ngOnInit(): void {
    this.producto.getData().subscribe({
      next: (response) => {
        
        this.productos = response;
      },
      error:(error)=>{
        console.error('Error en la solicitud', error)
      }
    })
  }

}
