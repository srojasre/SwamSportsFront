import { Component, OnInit } from '@angular/core';
import { MiniCatalogComponent } from '../mini-catalog/mini-catalog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MiniCatalogComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
