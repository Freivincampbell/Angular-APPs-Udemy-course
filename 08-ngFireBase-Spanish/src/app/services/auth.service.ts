import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
	private apiKey = 'AIzaSyBzx4sTM5P1vStxXd5jMfWEkJ2rVo5djgk';

	constructor(private readonly http: HttpClient) {}

	logOut() {
		localStorage.removeItem('token');
	}

	logIn(usuario: UsuarioModel) {
		return this.http
			.post(`${this.url}signInWithPassword?key=${this.apiKey}`, {
				...usuario,
				returnSecureToken: true
			})
			.pipe(
				map((response) => {
					this.guardarToken(response['idToken']);
					return response;
				})
			);
	}
	signUp(usuario: UsuarioModel) {
		return this.http
			.post(`${this.url}signUp?key=${this.apiKey}`, {
				...usuario,
				returnSecureToken: true
			})
			.pipe(
				map((response) => {
					this.guardarToken(response['idToken']);
					return response;
				})
			);
	}

	private guardarToken(idToken: string) {
		localStorage.setItem('token', idToken);
	}

	leerToken() {
		const token = localStorage.getItem('token');
		return token ? token : '';
	}

	estaAutendicado(): boolean {
		return this.leerToken().length > 2;
	}
}
