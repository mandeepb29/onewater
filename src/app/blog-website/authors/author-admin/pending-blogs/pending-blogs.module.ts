import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PendingBlogsComponent } from './pending-blogs.component';

const routes: Route[]=[
    {
    path: '',
    component: PendingBlogsComponent
    }
]

@NgModule({
  declarations: [PendingBlogsComponent],
  exports:[
    PendingBlogsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PendingBlogsModule { }
