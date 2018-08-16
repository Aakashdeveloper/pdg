import { Component } from '@angular/core';
import {Employee} from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  languages = ['AngularJS', 'ReactJs', 'NodeJS'];
  model = new Employee('John', 'Andrew', 'a@a.com', '123456',  'male', true, 'AngularJS');
  hasCodeLangError: Boolean = false;
  disbableSubmit: Boolean = false;

  constructor( private formPoster: FormPosterService) { }

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

  submitForm(form: NgForm): void {
    // console.log(form.value);
    this.formPoster.postEmployee(form.value)
        .subscribe(data => console.log('success', data));
  }

}


/*
ng-pristine  ng-touched     ng-valid
ng-dirty     ng-untouched   ng-invalid
*/
