import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
         Validators} from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit  {
    customerForm: FormGroup;

    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['',  [Validators.required, Validators.maxLength(8)]],
            email:    ['',     [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]]
        });
    }

    populateData(): void {
        this.customerForm.patchValue({
            firstName: 'John',
            lastName: 'Methaw'
        });
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }


 /*ngOnInit(): void {
        this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl()
        });
    }

     populateData(): void {
        this.customerForm.setValue({
            firstName: 'John',
            lastName: 'Methaw',
            email: 'a@a.com'
        });
    }

*/
