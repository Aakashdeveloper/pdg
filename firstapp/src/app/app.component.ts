import { Component } from '@angular/core';

@Component({
    selector: 'app-mycomp' ,
    template: `<div>
                    <h1>My main Component</h1>
                    <hr>
                    <app-dash></app-dash>
                    <app-prod></app-prod>
                </div>`

})

export class AppComponent {

}
