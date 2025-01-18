import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
