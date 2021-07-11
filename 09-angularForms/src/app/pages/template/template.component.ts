import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService, ICountry } from '../../services/country.service';

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
	user = {
		name: 'Freivin',
		lastName: 'Campbell',
		email: 'freivin12@gmail.com',
		country: '',
		gender: ''
	};

	countries: ICountry[] = [];

	constructor(private readonly _countryService: CountryService) {}

	ngOnInit(): void {
		this.fetchCountries();
	}

	save(formData: NgForm) {
		if (formData.invalid) {
			Object.values(formData.controls).forEach((control) => {
				control.markAsTouched();
			});
			return;
		}

		console.log(formData.value);
	}

	fetchCountries(): void {
		this._countryService.fetchCountries().subscribe((countries: ICountry[]) => {
			this.countries = countries;
		});
	}
}
