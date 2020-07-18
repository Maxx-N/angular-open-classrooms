import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  deviceName: string = 'Machine à laver';
  deviceStatus: string = 'Eteint';

  constructor() {}

  ngOnInit(): void {}

  getStatus():string {
    return this.deviceStatus;
  }
}
