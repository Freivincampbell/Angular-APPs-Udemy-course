import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-artist-card',
	templateUrl: './artist-card.component.html',
	styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {
	@Input() items: any = [];
	constructor(private readonly _router: Router) {}

	async getArtist(item: any) {
		let artistId;

		if (item.type === 'artist') {
			artistId = item.id;
		} else {
			artistId = item.artists[0].id;
		}

		await this._router.navigate(['/artist', artistId]);
	}

	ngOnInit(): void {}
}
