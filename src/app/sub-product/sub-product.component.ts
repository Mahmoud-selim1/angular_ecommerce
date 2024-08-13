import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css'],
})
export class SubProductComponent {
  all: any[] = [];
  id!: any;
  msg = '';
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.paramMap.get('id');
    http
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .subscribe((d: any) => {
        console.log(d.data);
        for (let i of d.data) {
          console.log(i);
          if (i.subcategory[0]._id == this.id) {
            this.all.push(i);
          } else {
            this.msg = 'there is no products';
          }
        }
        // if(d.data)
      });
  }
}
