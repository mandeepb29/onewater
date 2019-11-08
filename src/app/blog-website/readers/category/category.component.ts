import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  showSubCat=false;
  currentCategory='';
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

  constructor() { }

  ngOnInit() {

  }

}
