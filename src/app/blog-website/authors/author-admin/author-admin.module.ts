import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorAdminComponent } from './author-admin.component';
import { AuthorAdminRoutingModule } from './author-admin-routing.module';
// import { AuthorDashboardComponent } from './author-dashboard/Author-dashboard.component';


@NgModule({
  declarations: [AuthorAdminComponent],

  imports: [
    CommonModule,
    AuthorAdminRoutingModule
  ],
  exports:[AuthorAdminComponent]
})

export class AuthorAdminModule { }

