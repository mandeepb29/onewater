import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'singlevideo/:id',
    loadChildren: './single-video/single-video.module#SingleVideoModule'
  },
  {
    path: 'videos',
    loadChildren: './videos/videos.module#VideosModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoWebsiteRoutingModule { }
