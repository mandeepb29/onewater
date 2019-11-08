import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [

  {
    path: 'landing',
    component : LandingPageComponent
  },
  {
    path: 'about',
    loadChildren : './landing-components/about/about.module#AboutModule'
  },
  {
    path: 'donate',
    loadChildren : './landing-components/donation/donation.module#DonationModule'
  },
  {
    path: 'mission',
    loadChildren : './landing-components/mission/mission.module#MissionModule'
  },
  {
    path: 'team',
    loadChildren : './landing-components/team/team.module#TeamModule'
  },
  {
    path: 'vision',
    loadChildren : './landing-components/vision/vision.module#VisionModule'
  },
  {
    path: 'onewaterblog',
    loadChildren: './blog-website/blog-website.module#BlogWebsiteModule'
  },
  {
    path: 'onevideo',
    loadChildren: './video-website/video-website.module#VideoWebsiteModule'
  },
  {
    path: 'onewaterjobs',
    loadChildren: './job-portal/job-portal.module#JobPortalModule'
  },
  {
    path: 'user-admin',
    loadChildren: './user-admin/user-admin.module#UserAdminModule'
   },
    {
      path: 'login',
      loadChildren: './login-signup/login-signup.module#LoginSignupModule'
    },
  
    {
      path: 'thankyou-employer',
      loadChildren: './email-verified-employer/email-verified-employer.module#EmailVerifiedEmployerModule'
    },
    {
      path: 'thankyou-author',
      loadChildren: './email-verified-author/email-verified-author.module#EmailVerifiedAuthorModule'
    },
  {
    path: '**',
    redirectTo:'/landing',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
