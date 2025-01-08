import { Component, OnInit } from '@angular/core';
import { MiniCatalogComponent } from '../mini-catalog/mini-catalog.component';
import { PruebasComponent } from "../pruebas/pruebas.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MiniCatalogComponent, PruebasComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
