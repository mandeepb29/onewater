import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorAdminComponent } from './author-admin.component';
//import { AuthorDashboardComponent } from './author-dashboard/AuthorDashboard.component';
const routes: Routes = [
  {
    path: '',
    component: AuthorAdminComponent,
    children: [
    // { path: 'dashboard', component: AuthorDashboardComponent },
      { path: 'blog-details/:id', loadChildren: './blog-details/blog-details.module#BlogDetailsModule' },
      { path: 'post-blog', loadChildren: './post-blog/post-blog.module#PostBlogModule' },
      { path: 'edit-profile', loadChildren: './author-edit-profile/author-edit-profile.module#AuthorEditProfileModule' },
      { path: '', loadChildren: './all-blogs/all-blogs.module#AllBlogsModule' },
      { path: 'approved-blogs', loadChildren: './approved-blogs/approved-blogs.module#ApprovedBlogsModule' },
      { path: 'pending-blogs', loadChildren: './pending-blogs/pending-blogs.module#PendingBlogsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorAdminRoutingModule { }
