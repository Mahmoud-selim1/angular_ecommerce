import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css'],
})
export class SubCategoriesComponent {
  allData!: any[];
  show() {
    this.http
      .get('https://ecommerce.routemisr.com/api/v1/subcategories')
      .subscribe((data: any) => {
        console.log(data.data);
        this.allData = data.data;
      });
  }
  constructor(private http: HttpClient) {
    this.show();
  }
}
