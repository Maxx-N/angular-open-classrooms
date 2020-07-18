import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated: boolean = false;

  device1: string = 'Machine à laver';
  device2:string='Frigo';
  device3:string='Mac';

  constructor() {
    setTimeout(() => {
      this.isAuthenticated = true;
    }, 4000);
  }

  turnOnEverything(): void {
    console.log('On allume tout !');
  }
}
