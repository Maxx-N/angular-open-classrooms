import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceService } from '../services/device.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss'],
})
export class CreateDeviceComponent implements OnInit {
  defaultStatus: string = 'Eteint';

  constructor(private deviceService: DeviceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(myForm: NgForm) {
    this.deviceService.addDevice(myForm.value.name, myForm.value.status);
    this.router.navigate(['devices']);
  }
}
