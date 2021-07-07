import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styles: []
})
export class HeroComponent implements OnInit {
	hero: any = {};

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _heroesService: HeroesService
	) {
		this._activatedRoute.params.subscribe(({ id }) => {
			this.getHero(id);
		});
	}

	getHero(index: number): void {
		this.hero = this._heroesService.getHero(index);
	}

	ngOnInit(): void {}
}
