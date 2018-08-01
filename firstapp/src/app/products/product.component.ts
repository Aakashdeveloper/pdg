import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: 'products.component.html',
    // styles: ['thead{color:red}', 'h3{color:olive}' ]
    styleUrls: ['product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '*****Product List';
    showTable: Boolean = true;
    showImage: Boolean = false;
    filterText: string;
    imageWidth: Number = 50;
    products: IProduct[];

    constructor(private _productSerivce: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecieve(message: string): void {
        this.title = '#####Product List >>>>> ' + message;
    }

    ngOnInit(): void {
        this.products = this._productSerivce.getProducts();
    }
}


/*

string
number
boolean

one way binding
    --data binding   {{}}
    --property binding []
    --event binding    ()
two way binding [()]
*/
