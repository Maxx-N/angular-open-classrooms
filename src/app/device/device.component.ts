import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() id: number;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  getStatus(): string {
    return this.deviceStatus;
  }

  getColor(): string {
    if (this.deviceStatus === 'Allumé') {
      return 'green';
    } else if (this.deviceStatus === 'Eteint') {
      return 'red';
    }
  }

  onClickSwitch() {
    if (this.deviceStatus === 'Allumé') {
      this.deviceService.switchOffOne(this.id);
    } else {
      this.deviceService.switchOnOne(this.id);
    }
  }
}
