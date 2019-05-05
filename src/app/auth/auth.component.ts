import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfPageLogin, ThfPageLoginCustomField, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';

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

  constructor(private thfDialog: ThfDialogService) { }

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
	  /*login?us/*t-authentication-url="/dts/datasul-rest/resourceername=super&password=hFG6ihTXl1PTTLM7UbpGtLAl64E%3D"*/
	  console.log(formData);
    if (this.exceededAttempts <= 0) {
      this.thfDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData)
      });
    }
  }

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