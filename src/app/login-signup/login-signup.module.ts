import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup.component';

const routes: Route[]=[
    {
    path: '',
    component: LoginSignupComponent
    }
]

@NgModule({
  declarations: [LoginSignupComponent],
  exports:[LoginSignupComponent],
  imports: [
  RouterModule.forChild(routes),
  CommonModule,
  ]
})
export class LoginSignupModule { }
