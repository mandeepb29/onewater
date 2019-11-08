import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAdminComponent } from './user-admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserAdminComponent,
    children: [
      { path: 'platforms', component: UserDashboardComponent },
      { path: 'candidate-dashboard', loadChildren: './candidate-admin/candidate-dashboard/candidate-dashboard.module#CandidateDashboardModule' },
      { path: 'job-details', loadChildren: '../job-portal/employers/employer-admin/job-details/job-details.module#JobDetailsModule' },
      { path: 'emp-details', loadChildren: './candidate-admin/emp-details/emp-details.module#EmpDetailsModule' },
      { path: 'job-list', loadChildren: './candidate-admin/job-list/job-list.module#JobListModule' },
      { path: 'edit-profile', loadChildren: './candidate-admin/edit-profile/edit-profile.module#EditProfileModule' },
      { path: 'candidate-reg', loadChildren: './candidate-admin/candidate-registeration/candidate-registeration.module#CandidateRegisterationModule' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }
