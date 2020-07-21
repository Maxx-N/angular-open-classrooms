import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.component.html',
  styleUrls: ['./detail-device.component.scss'],
})
export class DetailDeviceComponent implements OnInit {
  name: string;
  status: string;

  constructor(
    private deviceService: DeviceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }
}
