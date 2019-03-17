import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
