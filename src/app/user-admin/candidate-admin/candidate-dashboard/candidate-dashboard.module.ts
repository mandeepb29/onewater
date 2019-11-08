import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CandidateDashboardComponent } from './candidate-dashboard.component';

const routes: Route[]=[
    {
    path: '',
    component: CandidateDashboardComponent
    }
]

@NgModule({
  declarations: [CandidateDashboardComponent],
  exports:[
    CandidateDashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class CandidateDashboardModule { }
