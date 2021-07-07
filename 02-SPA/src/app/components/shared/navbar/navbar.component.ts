import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';
@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	constructor(
		private readonly _router: Router,
		private readonly _heroesService: HeroesService
	) {}

	ngOnInit(): void {}

	searchHero(criteria: string) {
		this._router.navigate(['/search', criteria]);
	}
}
