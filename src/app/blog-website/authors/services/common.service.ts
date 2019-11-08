import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class CommonService {
  constructor(public http:HttpClient, public route: Router, public blogauth:AuthService){}

  addBlog(value){
    const data= new FormData();
    data.append('title',value.title)
    data.append('authorid',this.blogauth.authorapprovedid)
    data.append('image',value.image)
    data.append('desc',value.data)
    data.append('category','Technology');
    data.append('category','Health');
    this.http.post<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/unapproved-blog',data)
    .subscribe(result=>{
      console.log(result);
      alert(result.msg)
    })
  }

  getAllBlogs(){
   return this.http.get<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/authorallblogs/'+this.blogauth.authorapprovedid);
  }

  getPendingBlogs(){
    return this.http.get<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/authorunapprovedblogs/'+this.blogauth.authorapprovedid);
   }

  getApprovedBlogs(){
    return this.http.get<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/authorapprovedblogs/'+this.blogauth.authorapprovedid);
  }

  getSingleApprovedBlogs(id){
    return this.http.get<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/singleappblog/'+id);
  }

  getUser(){
    return this.http.get<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/single-author/'+this.blogauth.authorapprovedid);
  }

  getSingleAllBlog(id){
    console.log(id,'jjj')
    return this.http.get<{status:string, msg:string,result:any}>('https://onewater-blog-api.herokuapp.com/allblogs/'+id);
  }
}
