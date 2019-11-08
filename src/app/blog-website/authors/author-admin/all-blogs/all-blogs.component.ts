import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  allblogs;
  constructor(public common:CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getAllBlogs()
    .subscribe(result=>{
      console.log(result);
      this.allblogs=result.result;
    })
  }

}
