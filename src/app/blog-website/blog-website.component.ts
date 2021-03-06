import { Component, OnInit } from '@angular/core';
import { AuthService } from './authors/services/auth.service';

@Component({
  selector: 'app-blog-website',
  templateUrl: './blog-website.component.html',
  styleUrls: ['./blog-website.component.scss']
})
export class BlogWebsiteComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
    this.auth.checkLocalStorage();
    
  }

}
