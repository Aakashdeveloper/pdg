import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {  AppComponent } from './app.component';
import { DashComponent } from './dashboard.component';
import { ProductComponent } from './products/product.component';
import { UpperPipe } from './products/upperPipe';
import { AddValuePipe } from './products/advalue';
import { FilterPipe } from './products/filterProduct';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/product-detail.component';


@NgModule({
    // All module declare
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductComponent},
            {path: 'products/:name', component: ProductDetailComponent},
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ])
    ],
    // All Components & pipe
    declarations: [
        AppComponent,
        DashComponent,
        ProductComponent,
        UpperPipe,
        AddValuePipe,
        FilterPipe,
        StarComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent,
        ProductDetailComponent

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
