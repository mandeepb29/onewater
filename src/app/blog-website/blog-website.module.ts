import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogWebsiteRoutingModule } from './blog-website-routing.module';
import { BlogWebsiteComponent } from './blog-website.component';

@NgModule({
  declarations: [
    BlogWebsiteComponent],
  imports: [
    CommonModule,
    BlogWebsiteRoutingModule
  ]
})

export class BlogWebsiteModule { }
