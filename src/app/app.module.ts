import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DeviceComponent } from './device/device.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';

import { DeviceService } from './services/device.service';
import { AuthenticationService } from './services/authentication.service';
import { DetailDeviceComponent } from './detail-device/detail-device.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DeviceComponent,
    AuthenticationComponent,
    DevicesViewComponent,
    DetailDeviceComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DeviceService, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
