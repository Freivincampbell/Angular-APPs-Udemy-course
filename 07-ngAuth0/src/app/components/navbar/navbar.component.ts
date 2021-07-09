import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }

}
