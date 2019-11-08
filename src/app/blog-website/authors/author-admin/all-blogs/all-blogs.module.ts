import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AllBlogsComponent } from './all-blogs.component';

const routes: Route[]=[
    {
    path: '',
    component: AllBlogsComponent
    }
]

@NgModule({
  declarations: [AllBlogsComponent],
  exports:[
    AllBlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AllBlogsModule { }
