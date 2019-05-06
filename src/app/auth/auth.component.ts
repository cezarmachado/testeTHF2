import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import {HttpClient, HttpHeaders} from '@angular/common/http'
//import { Observable } from 'rxjs/Observable';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfPageLogin, ThfPageLoginCustomField, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';
import * as jsSHA from 'jssha';
import { map, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';


@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html'
})
export class AuthComponent  implements OnInit {

	background: string;
	contactEmail: string;
	customField: ThfPageLoginCustomField;
	customFieldOption: any;
	customFieldOptions: Array<ThfSelectOption>;
	customLiterals: ThfPageLoginLiterals;
	environment: string;
	exceededAttempts: number;
	literals: string;
	login: string;
	loginPattern: string;
	loginError: string;
	loginErrors: Array<string>;
	logo: string;
	passwordError: string;
	passwordErrors: Array<string>;
	passwordPattern: string;
	productName: string;
	properties: Array<string>;
	recovery: string;
	registerUrl: string;
	

  	public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
		{ value: 'hideRememberUser', label: 'Hide remember user' },
		{ value: 'loading', label: 'Loading' }
  	];

	constructor(private thfDialog: ThfDialogService,
				private http: Http
				) { }
	
	 //private http: Http,


  ngOnInit() {
	this.restore();
  }

  addCustomFieldOption() {
    this.customFieldOptions.push({label: this.customFieldOption.label, value: this.customFieldOption.value});
    this.customField.options = this.customFieldOptions;
    this.onChangeCustomProperties();

    this.customFieldOption = {};
  }

  addLoginError() {
    this.loginErrors.push(this.loginError);
    this.loginError = '';
  }

  addPasswordError() {
    this.passwordErrors.push(this.passwordError);
    this.passwordError = '';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  	loginSubmit(formData: ThfPageLogin) {

		
			
		let shaObj = new jsSHA("SHA-1", "TEXT");
			
		shaObj.update(formData.password);
		let hash = shaObj.getHash("B64");
		//let hash = '' ;
		let encoded = encodeURIComponent(hash);
		let username = formData.login;
		
		console.log(encoded)
		console.log(username)

		this.http.get(`/dts/datasul-rest/resources/login?username=${username}&password=${encoded}`)
			.subscribe((res) => {
			console.log(res)
		})
		
		
		/*this.http.get(`/dts/datasul-rest/resources/login?username=super&password=hFG6ihTXl1PTTLM7UbpGtLAl64E%3D`)
			.pipe(map((response: Response) => {
				console.log('get')
				const tokenn = response.text() ;
				console.log(tokenn);
				this.thfDialog.alert({
					title: 'Authenticate',
					message: tokenn
				  });
			}),
			catchError(( err, caught) => {
				return empty();
			})
			)*/
			
  	}
				/*=> {
				const tokenn = response.text() ;
				console.log('tokenn');
				/*user.token = tokenn;
				if (tokenn) {
				// store username and jwt token in local storage to keep user logged in between page refreshes
				//localStorage.setItem('currentUser', JSON.stringify(user));
					return true ;
				} else {
					turn false ;
				}
		})*/
		//.catch(error => this._serverError(error))
    

	  /*login?us/*t-authentication-url="/dts/datasul-rest/resourceername=super&password=hFG6ihTXl1PTTLM7UbpGtLAl64E%3D"*/
	 /* console.log(formData);
    if (this.exceededAttempts <= 0) {
      this.thfDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData)
      });
    }*/
  

  onChangeCustomProperties() {
    this.customField = Object.assign({}, this.customField);
  }

  restore() {
    this.properties = [];
    this.background = '';
    this.contactEmail = '';
    this.customField = { property: undefined };
    this.customFieldOption = { label: undefined, value: undefined };
    this.customFieldOptions = [];
    this.customLiterals = undefined;
    this.environment = '';
    this.exceededAttempts = 0;
    this.literals = '';
    this.login = '';
    this.loginPattern = '';
    this.loginError = '';
    this.loginErrors = [];
    this.logo = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.passwordPattern = '';
    this.passwordError = '';
    this.passwordErrors = [];
    this.productName = '';
    this.recovery = '';
    this.registerUrl = '';
  }

}