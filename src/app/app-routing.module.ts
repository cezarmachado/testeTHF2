import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AuthComponent } from './auth/auth.component'

const routes: Routes = [
	{ path: '', component: AuthComponent},
	{ path: 'hello-world', component: HelloWorldComponent },
	{ path: 'auth', component: AuthComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }