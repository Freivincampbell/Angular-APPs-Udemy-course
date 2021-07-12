import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../../models/hero.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: HeroModel[] = [];

	constructor(private readonly __heroesService: HeroesService) {}

	ngOnInit(): void {
		this.__heroesService.fetchHeroes().subscribe((result: HeroModel[]) => {
			this.heroes = result;
		});
	}
}
