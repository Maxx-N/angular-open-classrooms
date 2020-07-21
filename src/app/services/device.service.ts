import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devicesArray: any[] = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'Eteint',
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'Allumé',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'Eteint',
    },
  ];

  constructor() {}

  switchOnAll() {
    for (let device of this.devicesArray) {
      device.status = 'Allumé';
    }
  }

  switchOffAll() {
    for (let device of this.devicesArray) {
      device.status = 'Eteint';
    }
  }

  switchOnOne(i: number) {
    this.devicesArray[i].status = 'Allumé';
  }

  switchOffOne(i: number) {
    this.devicesArray[i].status = 'Eteint';
  }

  getDeviceById(id: number): any {
    return this.devicesArray.find((d) => {
      return d.id === id;
    });
  }
}
