import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CountryService {
	constructor(private readonly _httpClient: HttpClient) {}

	fetchCountries(): Observable<ICountry[]> {
		return this._httpClient
			.get('https://restcountries.eu/rest/v2/lang/es')
			.pipe(
				map((countries: any): ICountry[] =>
					countries.map((country: any) => ({
						name: country.name,
						code: country.alpha3Code
					}))
				)
			);
	}
}

export interface ICountry {
	name: string;
	code: string;
}
