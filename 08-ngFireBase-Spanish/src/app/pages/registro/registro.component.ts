import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
	usuario: UsuarioModel;
	recordarUsuario = false;

	constructor(private readonly auth: AuthService, private router: Router) {
		this.usuario = new UsuarioModel();
	}

	ngOnInit() {}

	onSubmit(form: NgForm) {
		if (form.invalid) return;
		this.auth.signUp(this.usuario).subscribe(
			async (response) => {
				if (this.recordarUsuario) {
					localStorage.setItem('email', this.usuario.email);
				}
				await this.router.navigateByUrl('/home');
			},
			({
				error: {
					error: { message }
				}
			}) => {
				console.log(message);
			}
		);
	}
}
