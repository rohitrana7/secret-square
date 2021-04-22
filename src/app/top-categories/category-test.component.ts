import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-test',
  templateUrl: './category-test.component.html',
  styleUrls: ['./category-test.component.css']
})
export class CategoryTestComponent implements OnInit {

  cardImgWidth = 100;
  cardImgHeight = 250;

  constructor() { }

  ngOnInit() {
  }

}
