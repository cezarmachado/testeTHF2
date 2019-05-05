import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'teste';
	menus = [
		{ label: 'Hello World', link: './hello-world' },
		{ label: 'auth', 		link: './auth' },
	];
}