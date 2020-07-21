import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devicesArray: any[] = [
    {
      name: 'Machine à laver',
      status: 'Eteint',
    },
    {
      name: 'Frigo',
      status: 'Allumé',
    },
    {
      name: 'Ordinateur',
      status: 'Eteint',
    },
  ];

  constructor() {}

  switchOnAll() {
    for (let device of this.devicesArray) {
      device.status = "Allumé";
    }
  }

  switchOffAll() {
    for (let device of this.devicesArray) {
      device.status = "Eteint";
    }
  }

  switchOnOne(i:number) {
    this.devicesArray[i].status = "Allumé";
  }

  switchOffOne(i:number) {
    this.devicesArray[i].status = "Eteint";
  }
}
