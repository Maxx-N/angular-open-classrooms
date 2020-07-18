import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.isAuthenticated = true;
    }, 4000);
  }

  turnOnEverything(): void {
    console.log('On allume tout !');
  }
}
