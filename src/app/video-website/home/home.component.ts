import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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


  public featuredvideos;
  public latestvideos;
  public likesvideos;
  constructor(public commonservice:CommonService) { }

ngOnInit() {

  this.commonservice.getVideoByViews()
        .subscribe(result=>{
          this.featuredvideos=result.result.slice(0,10)
          for(let i=0; i<this.featuredvideos.length; i++)
          {
            let image=this.getId(this.featuredvideos[i].video_link);
            this.featuredvideos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
          }
          console.log(this.featuredvideos,'hittt')
        })

  this.commonservice.getLatestvideos()
        .subscribe(result=>{
          this.latestvideos=result.result.slice(0,6)
          for(let i=0; i<this.latestvideos.length; i++)
          {
            let image=this.getId(this.latestvideos[i].video_link);
            this.latestvideos[i].image=`https://img.youtube.com/vi/${image}/0.jpg`;
          }
          console.log(this.latestvideos,'hittt')
        })

        this.commonservice.getVideoByLikes()
        .subscribe(result=>{
          this.likesvideos=result.result[0];
            let image=this.getId(this.likesvideos.video_link);
            this.likesvideos.image=`https://img.youtube.com/vi/${image}/0.jpg`;

          console.log(this.likesvideos,'hittt')
        })

}

getId(url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
      return match[2];
  } else {
      return 'error';
  }
}

}
