import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { GetOperationService } from 'src/app/job-portal/services/getOperation.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  public jobs;
  constructor(public service:GetOperationService) { }

  ngOnInit() {
    Feather.replace();
    let id=localStorage.getItem('companyid')
    this.service.jobsByCompany(id)
    .subscribe(result=> {
      console.log(result)
      this.jobs=result.result
      for(let i=0;i<result.result.length;i++){
        var d1 = new Date();
        var d2 = new Date(result.result[i].deadline);
        if(d1<d2) {
          this.jobs[i].status='active'}
        else {
          this.jobs[i].status='closed'}
      }
      console.log(this.jobs)
    })
  }

}
