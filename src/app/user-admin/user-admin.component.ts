import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
showSidebar=true;
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

  
    let i = 0 , prec;
    let degs = 180;
    let activeBorder = $("#activeBorder");

    setTimeout(function(){
        if($("#circle").ready())
           loopit("c");
        else
           loopit("nc");
    },1);

    function loopit(dir){
        if (dir == "c")
            i++
        else
            i--;
        if (i < 0)
            i = 0;
        if (i > degs)
        {
            i = degs;
            return;
        }

        prec = (100*i)/360;
        $(".prec").html(Math.round(prec)+"%");

        if (i<=180){
            activeBorder.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
        }
        else{
            activeBorder.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
        }

        setTimeout(function(){
            if($("#circle").ready())
                loopit("c");
            else
               loopit("nc");
        },1);

    }

  

  }

}
