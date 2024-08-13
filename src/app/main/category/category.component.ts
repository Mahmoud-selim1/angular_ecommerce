import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  allData!: any[];
  show() {
    this.http
      .get('https://ecommerce.routemisr.com/api/v1/categories')
      .subscribe((data: any) => {
        this.allData = data.data;
      });
  }
  constructor(private http: HttpClient) {
    this.show();
  }
}
