import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HeroModel } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	hero: HeroModel = new HeroModel();

	constructor(
		private readonly __heroesService: HeroesService,
		private readonly __activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id: string | null = this.__activatedRoute.snapshot.paramMap.get('id');

		if (id) {
			this.fetchHero(id);
		}
	}

	showModal(modalOptions: {
		title: string;
		text: string;
		allowOutsideClick: boolean;
		type: string;
		isWaiting: boolean;
	}) {
		Swal.fire(modalOptions);

		if (modalOptions.isWaiting) Swal.showLoading();
	}

	saveHero(form: NgForm) {
		if (form.invalid) return;

		this.showModal({
			title: 'Wait',
			text: 'Saving information',
			allowOutsideClick: false,
			type: 'info',
			isWaiting: true
		});

		if (this.hero.id) {
			this.updateHero(this.hero);
		} else {
			this.insertHero(this.hero);
		}
	}

	insertHero(hero: HeroModel) {
		this.__heroesService.insertHero(hero).subscribe((result: HeroModel) => {
			this.showModal({
				title: result.name,
				text: 'Create',
				allowOutsideClick: true,
				type: 'success',
				isWaiting: false
			});
			this.hero = result;
		});
	}

	updateHero(hero: HeroModel) {
		this.__heroesService.updateHero(hero).subscribe((result: HeroModel) => {
			this.showModal({
				title: result.name,
				text: 'Updated',
				allowOutsideClick: true,
				type: 'success',
				isWaiting: false
			});
			this.hero = result;
		});
	}

	fetchHero(id: string) {
		this.__heroesService.fetchHero(id).subscribe((result: HeroModel) => {
			this.hero = result;
			this.hero.id = id;
		});
	}
}
