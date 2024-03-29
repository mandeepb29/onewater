import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart  } from '@angular/router';
import * as $ from "jquery";
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
headerBlue = false;
  constructor(public router: Router, public http: HttpClient) {
}

  ngOnInit() {

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/onewaterblog/author-login' || event['url'] == '/onewaterblog/category' || event['url'] == '/onewaterjobs/emp-login' || event['url'] == '/onewaterjobs/emp-reg' || event['url']=='/onewaterblog/author-reg') {
          this.headerBlue = true;
        } else {
          this.headerBlue = false;
        }
      }
    });

      //---------------HEADER-------------//

     let menu_links = document.querySelectorAll(".menu ul li");
     let hamburger = document.querySelector(".hamburger");
      let links = document.querySelectorAll(".navlink a");
      let menu = document.querySelector(".menu");

  //for sticking the header
  if(window.innerWidth>=768){
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 80) {
        $(".navbar").addClass("navbar-on-scroll");
          $(menu).addClass("slide-out");
        }
         else {
        $(".navbar").removeClass("navbar-on-scroll");
         $(menu).removeClass("slide-out");
       }
   });

   $(hamburger).on("click",function(){
        $(menu).toggleClass("slide-out-scroll");
   });

  }
  else{
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 80) {
        $(".navbar").addClass("navbar-on-scroll");
        }
         else {
        $(".navbar").removeClass("navbar-on-scroll");
       }
   });
  }

  //toggle hamburger on toggle
  if (innerWidth <= 768) {
    $(links).on("click", function() {
      $(menu).toggleClass("slide-out-mobile");
      $(hamburger).toggleClass("open");
    });
    $(hamburger).on("click",function(){
         $(menu).toggleClass("slide-out-mobile");
    });
  }

  $(hamburger).on("click", function() {
    // $(menu).toggleClass("menu-opened");
    $(this).toggleClass("open");
  });

  }

  login(){
    this.http.get('http://localhost:3000')
    .subscribe(result=>{
      console.log(result);
    })
  }

}
