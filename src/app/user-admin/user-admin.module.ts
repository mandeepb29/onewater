import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAdminRoutingModule } from './user-admin-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAdminComponent } from './user-admin.component';

@NgModule({
  declarations: [UserAdminComponent,UserDashboardComponent],
  imports: [
    CommonModule,
    UserAdminRoutingModule
  ]
})
export class UserAdminModule { }
