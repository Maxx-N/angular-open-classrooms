import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devicesSubject: Subject<any[]> = new Subject<any[]>();

  private devicesArray: any[] = [
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

  emitDevicesSubject() {
    this.devicesSubject.next(this.devicesArray.slice());
  }

  switchOnAll() {
    for (let device of this.devicesArray) {
      device.status = 'Allumé';
    }
    this.emitDevicesSubject();
  }

  switchOffAll() {
    for (let device of this.devicesArray) {
      device.status = 'Eteint';
    }
    this.emitDevicesSubject();
  }

  switchOnOne(i: number) {
    this.devicesArray[i].status = 'Allumé';
    this.emitDevicesSubject();
  }

  switchOffOne(i: number) {
    this.devicesArray[i].status = 'Eteint';
    this.emitDevicesSubject();
  }

  getDeviceById(id: number): any {
    return this.devicesArray.find((d) => {
      return d.id === id;
    });
  }
}
