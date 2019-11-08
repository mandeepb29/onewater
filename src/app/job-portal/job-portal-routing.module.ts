import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  const routes: Routes = [
    {
      path: '',
      loadChildren: './candidates/job-home/job-home.module#JobHomeModule'
    },
    {
      path: 'jobdesc/:id',
      loadChildren: './candidates/job-desc/job-desc.module#JobDescModule'
    },
    {
      path: 'joblist',
      loadChildren: './candidates/job-list/job-list.module#JobListModule'
    },
    // {
    //   path: 'emp-dash',
    //   loadChildren: './employers/employer-dashboard/employer-dashboard.module#EmployerDashboardModule'
    // },
    {
      path: 'employer',
      loadChildren: './employers/employer-admin/employer-admin.module#EmployerAdminModule'
    },
    {
      path: 'emp-login',
      loadChildren: './employers/employer-login/employer-login.module#EmployerLoginModule'
    },
    {
      path: 'emp-reg',
      loadChildren: './employers/employer-registeration/employer-registeration.module#EmployerRegisterationModule'
    },
    {
      path: 'can-dash',
      loadChildren: './candidates/candidate-dashboard/candidate-dashboard.module#CandidateDashboardModule'
    },
    {
      path: 'can-details',
      loadChildren: './candidates/candidate-details/candidate-details.module#CandidateDetailsModule'
    },
    {
      path: 'emp-details/:id',
      loadChildren: './candidates/employer-details/employer-details.module#EmployerDetailsModule'
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPortalRoutingModule { }
