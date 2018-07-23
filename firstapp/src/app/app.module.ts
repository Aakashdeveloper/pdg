import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    // All module declare
    imports: [
        BrowserModule
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        DashboardComponent
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
