import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { PricesComponent } from './components/prices/prices.component';
import { AuthButtonComponent } from './components/auth/auth-button/auth-button.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrivateComponent,
    PricesComponent,
    AuthButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: '',
      clientId: ''
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
