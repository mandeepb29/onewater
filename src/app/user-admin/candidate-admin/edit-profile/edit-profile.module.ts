import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component';

const routes: Route[]=[
    {
    path: '',
    component: EditProfileComponent
    }
]

@NgModule({
  declarations: [EditProfileComponent],
  exports:[
    EditProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class EditProfileModule { }
