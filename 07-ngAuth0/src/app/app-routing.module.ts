import { NgModule } from '@angular/core';
import {AuthGuard} from './services/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PricesComponent} from './components/prices/prices.component';
import {PrivateComponent} from './components/private/private.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'private', component: PrivateComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
