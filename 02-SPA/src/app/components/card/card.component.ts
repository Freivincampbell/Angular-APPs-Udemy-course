import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() hero: any = {};
	@Input() position: number = 0;

	@Output() selectedHero: EventEmitter<number>;

	constructor(private readonly _router: Router) {
		this.selectedHero = new EventEmitter();
	}

	ngOnInit(): void {}

	async getHero() {
		this.selectedHero.emit(this.position);
		// await this._router.navigate(['hero', this.position]);
	}
}
