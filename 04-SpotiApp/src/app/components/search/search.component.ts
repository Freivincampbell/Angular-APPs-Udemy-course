import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	artists: any[] = [];
	isLoading: boolean = false;
	constructor(private readonly _spotifyService: SpotifyService) {}

	ngOnInit(): void {}

	searchArtists(criteria: string) {
		this.isLoading = true;
		this._spotifyService.searchArtists(criteria).subscribe(
			(artists: any) => {
				this.artists = artists;
				this.isLoading = false;
			},
			(error: any) => {
				this.artists = [];
				this.isLoading = false;
			}
		);
	}
}
