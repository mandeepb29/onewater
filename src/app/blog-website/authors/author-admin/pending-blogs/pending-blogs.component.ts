import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pending-blogs',
  templateUrl: './pending-blogs.component.html',
  styleUrls: ['./pending-blogs.component.scss']
})
export class PendingBlogsComponent implements OnInit {
pendingblogs;
  constructor(public common:CommonService) { }

  ngOnInit() {
    Feather.replace();
    this.common.getPendingBlogs()
    .subscribe(result=>{
      console.log(result);
      this.pendingblogs=result.result;
    })
  }

}
