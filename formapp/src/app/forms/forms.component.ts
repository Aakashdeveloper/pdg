import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  languages = ['AngularJS', 'ReactJs', "NodeJS"]
  model = new Employee('John','','',true,'')

  firstToUpper(value:string): void{
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
    else
      this.model.firstName = value
  }
  constructor() { }

  ngOnInit() {
  }

}
