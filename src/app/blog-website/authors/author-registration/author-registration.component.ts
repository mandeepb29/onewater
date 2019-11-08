import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-author-registration',
  templateUrl: './author-registration.component.html',
  styleUrls: ['./author-registration.component.scss']
})
export class AuthorRegistrationComponent implements OnInit {

  constructor(public auth: AuthService) { }

  form:FormGroup;
  imagePreview;
  submited:boolean=false;
  area=[];
  temp=[];
  ngOnInit() {

  this.form= new FormGroup({
    author_name:new FormControl(null,{validators:[Validators.required,Validators.email]}),
    location:new FormControl(null,{validators:[Validators.required]}),
    author_image:new FormControl(null,{validators:[Validators.required]}),
    author_desc:new FormControl(null),
    interest:new FormControl(null,{validators:[Validators.required]}),
    mobile:new FormControl(null,{validators:[Validators.required]}),
    facebook:new FormControl(null,{validators:[Validators.required]}),
    linkedin:new FormControl(null,{validators:[Validators.required]}),
    twitter:new FormControl(null,{validators:[Validators.required]}),
    instagram:new FormControl(null,{validators:[Validators.required]}),
  });
  }

  onImagePick(event:Event){
    const file=( event.target as HTMLInputElement).files[0];
    this.form.patchValue({author_image:file});
    this.form.get('author_image').updateValueAndValidity();
    const filereader= new FileReader();
    filereader.onload=()=>{
      this.imagePreview=filereader.result;
    }
    filereader.readAsDataURL(file);
  }

  submit(){
    console.log(this.form.value);
    this.submited=true;
    // if(this.form.invalid)
    //   {
    //     return;
    //   }
    console.log(this.form.value);
    this.area=this.form.value.interest.split('\n');
    this.form.value.interest=this.area;
    console.log(this.form.value,'sss');
     this.auth.authorRegistration(this.form.value);
  }


}
