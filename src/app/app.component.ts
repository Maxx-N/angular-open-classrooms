import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  seconds: number;

  constructor() {}

  ngOnInit() {
    const counter = interval(1000);

    counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log('Oups, il y a eu une erreur : ' + error);
      },
      () => {
        console.log('Observable complet !');
      }
    );
  }
}
