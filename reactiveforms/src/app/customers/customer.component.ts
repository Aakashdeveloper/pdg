import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
         Validators, ValidatorFn, AbstractControl} from '@angular/forms';

import { Customer } from './customer';


function ratingRange(min: number, max: number): ValidatorFn {
    return(c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return{'range1': true};
        }
        return null;
    };
}

function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return {'match': true};
}

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
            emailGroup: this.fb.group({
                email:    ['',     [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
                confirmEmail: ['', Validators.required],
            }, {validator: emailMatcher}),
            phone: [],
            notification: 'email',
            rating: ['', ratingRange(1, 6)]
        });

        this.customerForm.get('notification').valueChanges
                        .subscribe((value) => this.setNotification(value));
    }

    populateData(): void {
        this.customerForm.patchValue({
            firstName: 'John',
            lastName: 'Methaw'
        });
    }

    getName(): void {
        const fname = this.customerForm.get('firstName').value;
        this.customerForm.patchValue({
            firstName: fname.charAt(0).toUpperCase() + fname.slice(1)
        });
    }
    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

    setNotification(notifyVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
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
