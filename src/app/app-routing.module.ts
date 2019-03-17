import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/main', pathMatch: 'full' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'notifications', loadChildren: './pages/settings/notifications/notifications.module#NotificationsPageModule' }
];

// 1. If you want to login page as default, use this section.
// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
//   { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
