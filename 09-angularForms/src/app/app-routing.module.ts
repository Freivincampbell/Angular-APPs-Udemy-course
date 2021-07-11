import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
	{ path: 'template', component: TemplateComponent },
	{ path: 'reactive', component: ReactiveComponent },
	{ path: '', pathMatch: 'full', redirectTo: 'reactive' },
	{ path: '**', pathMatch: 'full', redirectTo: 'reactive' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
