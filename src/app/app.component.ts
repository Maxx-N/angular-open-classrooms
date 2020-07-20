import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated: boolean = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  devicesArray: object[] = [
    {
      name: 'Machine à laver',
      status: 'Eteint',
    },
    {
      name: 'Frigo',
      status: 'Eteint',
    },
    {
      name: 'Ordinateur',
      status: 'Allumé',
    },
  ];

  constructor() {
    setTimeout(() => {
      this.isAuthenticated = true;
    }, 4000);
  }

  onTurnOnEverything(): void {
    console.log('On allume tout !');
  }
}
