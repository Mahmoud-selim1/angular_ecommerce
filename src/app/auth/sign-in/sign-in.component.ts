import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sign_In } from 'src/app/models/signin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  obj = new Sign_In();

  constructor(private http: HttpClient) {}
  signIn() {
    this.http
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, this.obj)
      .subscribe((data: any) => {
        console.log(data.token);
        localStorage.setItem('token', data.token);
      });
  }
}
