import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoWebsiteRoutingModule } from './video-website-routing.module';
import { VideoWebsiteComponent } from './video-website.component';

@NgModule({
  declarations: [VideoWebsiteComponent],
  imports: [
    CommonModule,
    VideoWebsiteRoutingModule
  ]
})
export class VideoWebsiteModule { }
