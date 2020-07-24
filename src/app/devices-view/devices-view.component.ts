import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { AuthenticationService } from '../services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.scss'],
})
export class DevicesViewComponent implements OnInit {
  devicesArray: any[];
  devicesSubscription: Subscription;
  userIsAuthenticated: boolean = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(
    private deviceService: DeviceService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.devicesSubscription = this.deviceService.devicesSubject.subscribe(
      (devices: any[]) => {
        this.devicesArray = devices;
      }
    );
    this.deviceService.emitDevicesSubject();

    this.userIsAuthenticated = this.authenticationService.isAuthenticated;
  }

  onClickTurnOnEverything(): void {
    this.deviceService.switchOnAll();
  }

  onClickTurnOffEverything(): void {
    if (confirm('Êtes-vous certain de vouloir éteindre tous vos appareils?')) {
      this.deviceService.switchOffAll();
    }
  }

  onClickSave() {
    this.deviceService.saveDevicesOnServer();
  }

  onClickFetch() {
    this.deviceService.getDevicesFromServer();
  }
}
