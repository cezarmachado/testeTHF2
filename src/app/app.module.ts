import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';
import { ThfComponentsModule }  from '@totvs/thf-templates';



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
		ThfModule,
		ThfComponentsModule
		],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }