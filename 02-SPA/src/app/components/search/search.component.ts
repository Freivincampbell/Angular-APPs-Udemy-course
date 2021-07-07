import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: []
})
export class SearchComponent implements OnInit {
	heroes: any[] = [];
	criteria: string = '';

	@Input() position: number = 0;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _heroesService: HeroesService,
		private readonly _router: Router
	) {}

	ngOnInit(): void {
		this._activatedRoute.params.subscribe(({ criteria }) => {
			this.criteria = criteria;
			this.heroes = this._heroesService.findHero(criteria);
		});
	}

	async getHero(position: number) {
		await this._router.navigate(['hero', position]);
	}
}
