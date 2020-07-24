import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DeviceComponent } from './device/device.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DevicesViewComponent } from './devices-view/devices-view.component';
import { DetailDeviceComponent } from './detail-device/detail-device.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

import { DeviceService } from './services/device.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DeviceComponent,
    AuthenticationComponent,
    DevicesViewComponent,
    DetailDeviceComponent,
    NotFoundComponent,
    CreateDeviceComponent,
    UserListComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DeviceService,
    AuthenticationService,
    AuthenticationGuardService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


