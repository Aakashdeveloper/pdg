import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  languages = ['AngularJS', 'ReactJs', 'NodeJS'];
  model = new Employee('John', 'Andrew', '', '',  'male', true, '');
  hasCodeLangError: Boolean = false;
  disbableSubmit: Boolean = false;

  firstToUpper(value: string): void  {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }

  validateCodeLang(event): void {
    if (this.model.codelang === 'default') {
      this.hasCodeLangError = true;
      this.disbableSubmit = true;
    } else {
      this.hasCodeLangError = false;
      this.disbableSubmit = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }
}


/*
ng-pristine  ng-touched     ng-valid
ng-dirty     ng-untouched   ng-invalid
*/
