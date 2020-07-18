import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() deviceName: string;
  @Input() deviceStatus: string;

  constructor() {}

  ngOnInit(): void {}

  getStatus():string {
    return this.deviceStatus;
  }
}
