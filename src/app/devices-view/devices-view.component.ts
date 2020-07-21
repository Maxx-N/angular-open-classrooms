import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.component.html',
  styleUrls: ['./devices-view.component.scss'],
})
export class DevicesViewComponent implements OnInit {
  
  devicesArray: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  isAuthenticated: boolean = false;

  constructor(private deviceService: DeviceService) {}

  ngOnInit():void {
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
