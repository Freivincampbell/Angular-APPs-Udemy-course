import { Component, OnInit } from '@angular/core';
import { Hero, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styles: []
})
export class HeroesComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(
		private readonly _heroesService: HeroesService,
		private readonly _router: Router
	) {}

	ngOnInit(): void {
		this.heroes = this._heroesService.getHeroes();
	}

	async getHero(position: number) {
		await this._router.navigate(['hero', position]);
	}
}
