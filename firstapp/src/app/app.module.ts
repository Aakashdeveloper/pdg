import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All module declare
    imports: [
        BrowserModule
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent
    ],
    // Only main component
    bootstrap: [
        AppComponent
    ],
    // All services
    providers: []
})

export class AppModule {

}
