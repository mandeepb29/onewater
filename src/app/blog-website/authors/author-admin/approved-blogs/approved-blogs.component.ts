import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-approved-blogs',
  templateUrl: './approved-blogs.component.html',
  styleUrls: ['./approved-blogs.component.scss']
})
export class ApprovedBlogsComponent implements OnInit {
  approvedblogs;
  constructor(public common:CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getApprovedBlogs()
    .subscribe(result=>{
      console.log(result);
      this.approvedblogs=result.result;
    })
  }
  }


