import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'registro', component: RegistroComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', redirectTo: 'registro' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
