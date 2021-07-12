import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeroModel } from '../models/hero.model';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeroesService {
	private url: string = 'https://ngfirebaselogin-default-rtdb.firebaseio.com';
	constructor(private readonly __httpClient: HttpClient) {}

	insertHero(hero: HeroModel): Observable<HeroModel> {
		return this.__httpClient.post(`${this.url}/heroes.json`, hero).pipe(
			map((result: any) => {
				hero.id = result.name;
				return hero;
			})
		);
	}

	updateHero(hero: HeroModel): Observable<HeroModel> {
		const heroTemp = {
			...hero
		};
		delete heroTemp.id;

		return this.__httpClient
			.put(`${this.url}/heroes/${hero.id}.json`, heroTemp)
			.pipe(
				map((result: any) => {
					return hero;
				})
			);
	}

	fetchHero(id: string): Observable<any> {
		return this.__httpClient.get(`${this.url}/heroes/${id}.json`);
	}

	fetchHeroes(): Observable<any> {
		return this.__httpClient.get(`${this.url}/heroes/.json`).pipe(
			map((result: any) => {
				if (result === null) return [];
				return Object.keys(result).map((key) => {
					const hero: HeroModel = result[key];
					hero.id = key;
					return hero;
				});
			})
		);
	}
}
