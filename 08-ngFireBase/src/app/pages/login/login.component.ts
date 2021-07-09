import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario: UsuarioModel;
	recordarUsuario = false;

	constructor(private readonly auth: AuthService, private router: Router) {
		this.usuario = new UsuarioModel();
	}

	ngOnInit() {
		if (localStorage.getItem('email')) {
			this.usuario.email = localStorage.getItem('email');
			this.recordarUsuario = true;
		}
	}

	login(form: NgForm) {
		if (form.invalid) return;

		this.auth.logIn(this.usuario).subscribe(
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
