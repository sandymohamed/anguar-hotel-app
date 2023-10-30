import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(


  ){
    

  }

  ngOnInit(): void {

  }


  login(){
    console.log('email:'+this.email);
    console.log('password:'+this.password);

    if(this.email=== "admin@gmail.com" && this.password==="admin" ){
      alert("Login Successful");
    }
  }

}
