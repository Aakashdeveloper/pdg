import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { UpperPipe } from './upperPipe';
import { AddValuePipe } from './advalue';
import { FilterPipe } from './filterProduct';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { RouteService } from './routesGaurds.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:name', canActivate: [RouteService], component: ProductDetailComponent},
        ]),
        SharedModule
    ],
    declarations: [
        ProductComponent,
        UpperPipe,
        AddValuePipe,
        FilterPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService,
        RouteService
    ]
})

export class ProductModule {

}
