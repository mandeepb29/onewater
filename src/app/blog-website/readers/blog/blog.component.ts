import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
import '../../stickit';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
showSubCat=false;
currentCategory='';

blogcards;
featuredblog;


categories = [
  {
    'img':'assets/img/icons/health.svg',
    'name':'Health',
    'subcat':[
      {
      'subname':'Nutrients',
      'subimg':'assets/img/icons/4.svg'
    },
    {
    'subname':'Diseases',
    'subimg':'assets/img/icons/3.svg'
    },
    {
      'subname':'Cures',
      'subimg':'assets/img/icons/2.svg'
    },
    {
    'subname':'Habits',
    'subimg':'assets/img/icons/1.svg'
    },
    {
    'subname':'Better You',
    'subimg':'assets/img/icons/8.svg'
    }
]
  },
  {
    'img':'assets/img/icons/travel.svg',
    'name':'Travel',
    'subcat':[
      {
      'subname':'Stories',
      'subimg':'assets/img/icons/7.svg'
    },
    {
    'subname':'Places',
    'subimg':'assets/img/icons/6.svg'
    },
    {
      'subname':'Experiences',
      'subimg':'assets/img/icons/5.svg'
    }
]
  },
  {
    'img':'assets/img/icons/book.svg',
    'name':'Books',
    'subcat':[
      {
      'subname':'fiction',
      'subimg':'assets/img/icons/4.svg'
    },
    {
    'subname':'science',
    'subimg':'assets/img/icons/3.svg'
    },
    {
      'subname':'biographies',
      'subimg':'assets/img/icons/2.svg'
    },
    {
    'subname':'Business',
    'subimg':'assets/img/icons/1.svg'
    }
]

  },
  {
    'img':'assets/img/icons/fashion.svg',
    'name':'Fashion',
    'subcat':[
      {
      'subname':'Men',
      'subimg':'assets/img/icons/8.svg'
    },
    {
    'subname':'Women',
    'subimg':'assets/img/icons/7.svg'
    },
    {
      'subname':'Trends',
      'subimg':'assets/img/icons/6.svg'
    }

]
  },
  {
    'img':'assets/img/icons/sports.svg',
    'name':'Sports',
    'subcat':[
      {
      'subname':'Cricket',
      'subimg':'assets/img/icons/5.svg'
    },
    {
    'subname':'Football',
    'subimg':'assets/img/icons/4.svg'
    },
    {
      'subname':'Tennis',
      'subimg':'assets/img/icons/3.svg'
    },
    {
      'subname':'Basketball',
      'subimg':'assets/img/icons/2.svg'
    }
]

  },
  {
    'img':'assets/img/icons/lifestyle.svg',
    'name':'Lifestyle',
    'subcat':[
      {
      'subname':'Happy',
      'subimg':'assets/img/icons/1.svg'
    },
    {
    'subname':'Mood',
    'subimg':'assets/img/icons/8.svg'
    }
]
  },
  {
    'img':'assets/img/icons/mental-health.svg',
    'name':'Positivity',
    'subcat':[
      {
      'subname':'Stories',
      'subimg':'assets/img/icons/7.svg'
    },
    {
    'subname':'Lessons',
    'subimg':'assets/img/icons/6.svg'
    },
    {
      'subname':'Advice',
      'subimg':'assets/img/icons/5.svg'
    }
]
  },
  {
    'img':'assets/img/icons/nature.svg',
    'name':'Nature',
    'subcat':[
      {
      'subname':'Flora',
      'subimg':'assets/img/icons/4.svg'
    },
    {
    'subname':'Fauna',
    'subimg':'assets/img/icons/3.svg'
    },
    {
      'subname':'Mother Nature',
      'subimg':'assets/img/icons/2.svg'
    },
    {
    'subname':'Places',
    'subimg':'assets/img/icons/1.svg'
    }
]
  },
]

SubCategories=[];
showSubCategories(index){
  this.showSubCat=true;
  this.currentCategory = this.categories[index].name;
  this.SubCategories=[];
  this.SubCategories = this.categories[index].subcat;
  console.log(this.SubCategories);
  document.querySelector(".categories-card")['style'].display = "none";
  document.querySelector(".subcategories-card")['style'].display = "block";
}
backToCategories(){
  document.querySelector(".categories-card")['style'].display = "block";
  document.querySelector(".subcategories-card")['style'].display = "none";
}

  //owl carousel settings

  carouselOptions = {
    margin: 25,
    nav: true,
    dots:false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        stagePadding: 50
      },
      1200: {
        items: 3,
      },
      1500: {
        items: 3,
      }
    }
  }

  carouselOptionsAuthors = {
    margin: 25,
    nav: true,
    dots:false,
    stagePadding: 50,

    navText: ['<img src="assets/img/icons/prev.svg" style="width:30px;">', '<img src="assets/img/icons/next.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {

      0: {
        items: 1,
        nav: false,
        stagePadding: 10,
      },
      420: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: true
      },
      991: {
        items: 3,
        nav: true
      },
      1200: {
        items: 4,
        nav: true
      }

    }
  }

  authors;
    constructor(public http:HttpClient) { }

    ngOnInit() {
      $('#sticky-sidebar').stickit({
       // screenMinWidth: 1024,    // apply if width >= 1024
        top:100
      });

        this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/approveblogs')
        .subscribe(result=>{
          console.log(result);
          this.blogcards=result.result;
          this.featuredblog=result.result.reverse();
          this.featuredblog=this.featuredblog.slice(0, 6);
        })

        this.http.get<{status:string, msg:string, result:any}>('https://onewater-blog-api.herokuapp.com/approvedauthor')
        .subscribe(result=>{
          console.log(result);
          this.authors=result.result;
        })

  
    }

}
