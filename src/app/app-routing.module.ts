import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DetailDeviceComponent } from './detail-device/detail-device.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationComponent,
  },
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  {
    path: 'devices',
    canActivate: [AuthenticationGuardService],
    component: DevicesViewComponent,
  },
  {
    path: 'devices/new',
    canActivate: [AuthenticationGuardService],
    component: CreateDeviceComponent,
  },
  {
    path: 'devices/:id',
    canActivate: [AuthenticationGuardService],
    component: DetailDeviceComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
    children: [
      {
        path: 'new',
        component: CreateUserComponent,
      },
    ],
  },

  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
