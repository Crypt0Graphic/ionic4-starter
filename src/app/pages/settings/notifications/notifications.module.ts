import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsPage } from './notifications.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}
