import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: AuthComponent},
	{ path: 'hello-world', component: HelloWorldComponent },
	{ path: 'auth', component: AuthComponent},
	{path: 'home', component: HomeComponent,
	children: [
		{path: '', redirectTo: 'auth', pathMatch: 'full'},
		{path: 'hello-world', component: HelloWorldComponent},		
	]}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }