import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPortalRoutingModule } from './job-portal-routing.module';
import { JobPortalComponent } from './job-portal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [JobPortalComponent],
  imports: [
    CommonModule,
    JobPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JobPortalModule { }
