import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
	declarations: [
		AppComponent,
		HelloWorldComponent,
		AuthComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ThfModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }