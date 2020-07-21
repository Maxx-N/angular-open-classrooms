import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DeviceComponent } from './device/device.component';
import { DeviceService } from './services/device.service';

@NgModule({
  declarations: [AppComponent, FirstComponent, DeviceComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DeviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
