import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { AuthJobService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class GetOperationService {
  constructor(public http:HttpClient, public route: Router, public auth:AuthJobService){}

  jobsByCompany(id){
    console.log('hit')
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/company_posted_jobs/'+id);
  }

  getAllJobs(){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/getjobs');
  }

  getSingleJob(id){
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/singlejob/'+id);
  }

  getSingleCompany(){
    console.log(this.auth.companyid);
    return this.http.get<{status:string, msg:string, result:any}>('https://onewater-job-api.herokuapp.com/singlecompany/'+this.auth.companyid);
  }
}
