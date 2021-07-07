import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SpotifyService } from './services/spotify.service';
import { ManageNoimagePipe } from './pipes/manage-noimage.pipe';
import { ArtistCardComponent } from './components/shared/artist-card/artist-card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SearchComponent,
		ArtistComponent,
		NavbarComponent,
		ManageNoimagePipe,
		DomseguroPipe,
		ArtistCardComponent,
		LoadingComponent
	],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule],
	providers: [SpotifyService],
	bootstrap: [AppComponent]
})
export class AppModule {}
