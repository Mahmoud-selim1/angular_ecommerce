import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SignIn } from 'src/app/models/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  obj = new SignIn();
  constructor(private http: HttpClient) {}
  signUp() {
    this.http
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, this.obj)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
