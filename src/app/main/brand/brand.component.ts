import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  allData!: any[];
  show() {
    this.http
      .get('https://ecommerce.routemisr.com/api/v1/brands')
      .subscribe((data: any) => {
        console.log(data.data);
        this.allData = data.data;
      });
  }
  constructor(private http: HttpClient) {
    this.show();
  }
}
