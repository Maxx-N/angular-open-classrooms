import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devicesSubject: Subject<any[]> = new Subject<any[]>();

  private devicesArray: any[];

  constructor(private httpClient: HttpClient) {}

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

  addDevice(deviceName: string, deviceStatus: string) {
    const device = {
      id: 0,
      name: deviceName,
      status: deviceStatus,
    };

    device.id = this.devicesArray[this.devicesArray.length - 1].id + 1;

    this.devicesArray.push(device);

    this.emitDevicesSubject();
  }

  saveDevicesOnServer(): void {
    this.httpClient
      .put(
        'https://first-angular-database.firebaseio.com/devices.json',
        this.devicesArray
      )
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getDevicesFromServer(): void {
    this.httpClient
      .get<any[]>('https://first-angular-database.firebaseio.com/devices.json')
      .subscribe(
        (response) => {
          this.devicesArray = response;
          this.emitDevicesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
