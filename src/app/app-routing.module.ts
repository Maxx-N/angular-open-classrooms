import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  { path: '', component: DevicesViewComponent },
  { path: 'devices', component: DevicesViewComponent },
  { path: 'authentication', component: AuthenticationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
