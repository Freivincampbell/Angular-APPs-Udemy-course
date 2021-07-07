import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		AboutComponent,
		HeroesComponent,
		HeroComponent,
		SearchComponent,
		CardComponent
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [HeroesService],
	bootstrap: [AppComponent]
})
export class AppModule {}
