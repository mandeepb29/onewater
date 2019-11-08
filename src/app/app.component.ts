import { Component,OnInit } from '@angular/core';
import { Router, NavigationStart,NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'one-water-blog';
  showLogin: boolean = false;
  //videoblog: boolean = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public router: Router, private location: Location) {

    this.location.subscribe((ev:PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
  });
  this.router.events.subscribe((ev:any) => {
      if (ev instanceof NavigationStart) {
          if (ev.url != this.lastPoppedUrl)
              this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
          if (ev.url == this.lastPoppedUrl) {
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
          } else
              window.scrollTo(0, 0);
      }
  });

}
  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login' || event['url'] == '/dashboard' ||event['url'] == '/thankyou-author'  ||event['url'] == '/thankyou-employer' || event['url'].includes('/onewaterjobs/employer/')  || event['url'].includes('/onewaterblog/author-admin')|| event['url'].includes('/user-admin/')) {
          this.showLogin = false;
        } else {
          this.showLogin = true;
        }

      }
    });
}
}
