import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;

  devicesArray: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private deviceService: DeviceService) {
    setTimeout(() => {
      this.isAuthenticated = true;
    }, 2000);
  }

  ngOnInit() {
    this.devicesArray = this.deviceService.devicesArray;
  }

  onClickTurnOnEverything(): void {
    this.deviceService.switchOnAll();
  }

  onClickTurnOffEverything(): void {
    if (confirm('Êtes-vous certain de vouloir éteindre tous vos appareils?')) {
      this.deviceService.switchOffAll();
    } 
  }
}
