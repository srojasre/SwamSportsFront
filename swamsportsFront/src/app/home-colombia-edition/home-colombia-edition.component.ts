import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MiniCatalogComponent } from "../mini-catalog/mini-catalog.component";

@Component({
  selector: 'app-home-colombia-edition',
  templateUrl: './home-colombia-edition.component.html',
  styleUrls: ['./home-colombia-edition.component.css'],
  standalone: true,
  imports: [NavbarComponent, MiniCatalogComponent]
})
export class HomeColombiaEditionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
