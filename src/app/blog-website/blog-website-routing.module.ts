import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: './readers/blog/blog.module#BlogModule'
  },
  {
    path: 'blogpost/:id',
    loadChildren: './readers/blog-post/blog-post.module#BlogPostModule'
  },
  {
    path: 'author/:id',
    loadChildren: './readers/author-page/author-page.module#AuthorPageModule'
  },
  {
    path: 'profile',
    loadChildren: './readers/profile/profile.module#ProfileModule'
  },
  {
    path: 'category',
    loadChildren: './readers/category/category.module#CategoryModule'
  },
  {
    path: 'author-login',
    loadChildren: './authors/author-login/author-login.module#AuthorLoginModule'
  },
  {
    path: 'author-reg',
    loadChildren: './authors/author-registration/author-registration.module#AuthorRegistrationModule'
  },
  {
    path: 'author-admin',
    loadChildren: './authors/author-admin/author-admin.module#AuthorAdminModule'
  },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogWebsiteRoutingModule { }
