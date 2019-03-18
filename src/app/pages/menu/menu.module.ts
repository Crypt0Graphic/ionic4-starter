import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: '../main/main.module#MainPageModule'
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginPageModule'
      },
      // If you want to settings and about at menu remove comment. They will be shown without tabs.
      // {
      //   path: 'about',
      //   loadChildren: '../about/about.module#AboutPageModule'
      // },
      // {
      //   path: 'settings',
      //   loadChildren: '../settings/settings.module#SettingsPageModule'
      // },
      {
        path: 'settings/notifications',
        loadChildren: '../settings/notifications/notifications.module#NotificationsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MenuPage]
})
export class MenuPageModule {}
