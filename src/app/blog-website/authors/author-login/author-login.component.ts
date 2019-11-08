import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-author-login',
  templateUrl: './author-login.component.html',
  styleUrls: ['./author-login.component.scss']
})
export class AuthorLoginComponent implements OnInit {

  user:FormGroup;
  loginuser:FormGroup;
  showregform(){
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldreg")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "block"

    }

     showauthform(){
    document.querySelector(".vldauth")['style'].display = "flex";
    document.querySelector(".vldreg")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "none";
    document.getElementById("login-text")['style'].display = "block"
    document.getElementById("signup-text")['style'].display = "none"
    }

     showrecoveryform(){
    document.querySelector(".vldauth")['style'].display = "none";
    document.querySelector(".vldrecpass")['style'].display = "flex";
    document.getElementById("login-text")['style'].display = "none"
    document.getElementById("signup-text")['style'].display = "none"
    }
    constructor(public auth:AuthService) { }

  ngOnInit() {
    this.auth.checkLocalStorage();
    this.showregform();
    this.user= new FormGroup({
      author_name:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      author_email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]}),
      cpassword:new FormControl(null,{validators:[Validators.required]})
    });

    this.loginuser= new FormGroup({
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]}),
    });
  }

  register(){
    console.log(this.user.value);
    this.auth.author(this.user.value);
  }

  login(){
    console.log(this.loginuser.value);
    this.auth.login(this.loginuser.value);
  }

}
