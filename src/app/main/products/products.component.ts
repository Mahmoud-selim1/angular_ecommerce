import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  allData!: any[];
  show() {
    this.http
      .get('https://ecommerce.routemisr.com/api/v1/products')
      .subscribe((data: any) => {
        console.log(data.data);
        this.allData = data.data;
      });
  }
  constructor(private http: HttpClient) {
    this.show();
  }
}
