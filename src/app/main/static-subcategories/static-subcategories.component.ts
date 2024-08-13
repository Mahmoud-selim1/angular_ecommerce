import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-subcategories',
  templateUrl: './static-subcategories.component.html',
  styleUrls: ['./static-subcategories.component.css'],
})
export class StaticSubcategoriesComponent {
  id!: any;
  allData!: any[];
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params?.['id'];

    http
      .get(
        `https://ecommerce.routemisr.com/api/v1/categories/${this.id}/subcategories`
      )
      .subscribe((data: any) => {
        this.allData = data.data;
      });
  }
}
