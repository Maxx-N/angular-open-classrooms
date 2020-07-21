import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  status: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.status = this.authenticationService.isAuthenticated;
  }

  onClickSignIn(): void {
    this.authenticationService.signIn().then(() => {
      console.log('Connexion réussie !');
      this.status = this.authenticationService.isAuthenticated;
      this.router.navigate(['devices']);
    });
  }

  onClickSignOut(): void {
    this.authenticationService.signOut();
    this.status = this.authenticationService.isAuthenticated;
  }
}
