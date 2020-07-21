import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DetailDeviceComponent } from './detail-device/detail-device.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'devices', component: DevicesViewComponent },
  { path: 'devices/:id', component: DetailDeviceComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
