import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ApprovedBlogsComponent } from './approved-blogs.component';

const routes: Route[]=[
    {
    path: '',
    component: ApprovedBlogsComponent
    }
]

@NgModule({
  declarations: [ApprovedBlogsComponent],
  exports:[
    ApprovedBlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ApprovedBlogsModule { }
