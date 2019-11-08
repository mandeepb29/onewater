import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {


      showregform(){
      document.querySelector(".vldauth")['style'].display = "none";
      document.querySelector(".vldreg")['style'].display = "flex";
      }

       showauthform(){
      document.querySelector(".vldauth")['style'].display = "flex";
      document.querySelector(".vldreg")['style'].display = "none";
      document.querySelector(".vldrecpass")['style'].display = "none";
      }

       showrecoveryform(){
      document.querySelector(".vldauth")['style'].display = "none";
      document.querySelector(".vldrecpass")['style'].display = "flex";
      }

  constructor() { }

  ngOnInit() {



  }

}
