import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {
	constructor(private readonly _http: HttpClient) {}

	fetchData(query: string) {
		const headers = new HttpHeaders({
			Authorization: 'Bearer token_here'
		});
		const url = `https://api.spotify.com/v1/${query}`;

		return this._http.get(url, { headers });
	}

	getNewReleases() {
		return this.fetchData('browse/new-releases?limit=50').pipe(
			map((result: any) => {
				return result.albums.items;
			})
		);
	}

	searchArtists(criteria: string) {
		return this.fetchData(`search?q=${criteria}&type=artist`).pipe(
			map((result: any) => {
				return result.artists.items;
			})
		);
	}

	searchArtist(id: string) {
		return this.fetchData(`artists/${id}`).pipe(
			map((result: any) => {
				return result;
			})
		);
	}

	getTopTracks(id: string) {
		return this.fetchData(`artists/${id}/top-tracks?country=US`).pipe(
			map((result: any) => {
				return result.tracks;
			})
		);
	}
}
