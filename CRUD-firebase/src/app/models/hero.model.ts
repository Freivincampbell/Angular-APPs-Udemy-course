export class HeroModel {
	id?: string;
	name: string;
	power: string;
	isAlive: boolean;

	constructor() {
		this.id = '';
		this.name = '';
		this.power = '';
		this.isAlive = true;
	}
}
