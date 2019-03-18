import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home'
    },
    // If you want to settings and about at menu remove comment. They will be shown without tabs.
    // {
    //   title: 'About',
    //   url: '/menu/about'
    // },
    // {
    //   title: 'Settings',
    //   url: '/menu/settings'
    // },
    {
      title: 'Login',
      url: '/menu/login',
      icon: 'log-in'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}
}
