import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { JobListComponent } from './job-list.component';

const routes: Route[]=[
    {
    path: '',
    component: JobListComponent
    }
]

@NgModule({
  declarations: [JobListComponent],
  exports:[
    JobListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class JobListModule { }
