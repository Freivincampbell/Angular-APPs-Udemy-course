import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	newReleases: any[] = [];
	isLoading: boolean = true;
	constructor(private readonly _spotifyService: SpotifyService) {
		this._spotifyService.getNewReleases().subscribe((newReleases: any) => {
			this.newReleases = newReleases;
			this.isLoading = false;
		});
	}

	ngOnInit(): void {}
}
