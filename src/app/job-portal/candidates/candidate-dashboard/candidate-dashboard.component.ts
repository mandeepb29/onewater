import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import * as $ from "jquery";

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {
tab = "dashboard";
//owl carousel settings

carouselOptions = {
  margin: 25,
  nav: true,
  dots:false,

  stagePadding: 50,
  navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 10,
    },
    600: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1500: {
      items: 3,

    }
  }
}
  constructor() { }

  ngOnInit() {
    let filter = document.querySelector('.filter-btn a');
    let optionBox = document.querySelector('.dashboard-sidebar');
    let options = document.querySelectorAll('.dashboard-sidebar .dashboard-menu ul li a');
    $(filter).on("click",function(){
         $(optionBox).toggleClass("slide-in");
    });
    $(options).on("click",function(){
         $(optionBox).toggleClass("slide-in");
    });

    Feather.replace();
  }

}
