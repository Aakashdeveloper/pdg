import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {  AppComponent } from './app.component';
import { DashComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { UpperPipe } from './products/upperPipe';
import { AddValuePipe } from './products/advalue';
import { FilterPipe } from './products/filterProduct';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';


@NgModule({
    // All module declare
    imports: [
        BrowserModule,
        FormsModule
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent,
        UpperPipe,
        AddValuePipe,
        FilterPipe,
        StarComponent
    ],
    // Only main component
    bootstrap: [
        AppComponent
    ],
    // All services
    providers: [
        ProductService
    ]
})

export class AppModule {

}
