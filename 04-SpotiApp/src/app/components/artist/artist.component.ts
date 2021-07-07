import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
	artist: any = {};
	topTracks: any[] = [];
	isLoading: boolean = true;

	constructor(
		private readonly _activatedRouter: ActivatedRoute,
		private readonly _spotifyService: SpotifyService
	) {
		this._activatedRouter.params.subscribe(({ id }) => {
			this.searchArtist(id);
			this.getTopTracks(id);
		});
	}

	searchArtist(id: string) {
		this.isLoading = true;
		this._spotifyService.searchArtist(id).subscribe(
			(artist) => {
				this.artist = artist;
				this.isLoading = false;
			},
			(error) => {
				this.isLoading = false;
			}
		);
	}

	getTopTracks(id: string) {
		this.isLoading = true;
		this._spotifyService.getTopTracks(id).subscribe(
			(topTracks) => {
				this.topTracks = topTracks;
				this.isLoading = false;
			},
			(error) => {
				this.isLoading = false;
			}
		);
	}

	ngOnInit(): void {}
}
