import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive',
	templateUrl: './reactive.component.html',
	styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
	formGroup: FormGroup = new FormGroup({});

	constructor(private _formBuilder: FormBuilder) {
		this.createForm();
	}

	ngOnInit(): void {}

	get isNameInvalid(): boolean {
		return <boolean>(
			(this.formGroup.get('name')?.invalid &&
				this.formGroup.get('name')?.touched)
		);
	}

	createForm() {
		this.formGroup = this._formBuilder.group({
			name: ['Freivin', [Validators.required, Validators.minLength(5)]],
			lastName: ['Campbell', [Validators.required, Validators.minLength(5)]],
			email: [
				'freivin12@gmail.com',
				[
					Validators.required,
					Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
				]
			]
		});
	}

	save() {
		console.log(this.formGroup);
	}
}
