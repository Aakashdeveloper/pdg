import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    title: String = 'Product Details';
    id: Number;
    name: String;
    desc: String;
    image: String;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['name'];

        this._route
            .queryParams
            .subscribe((params) => {
                this.name = params['name'];
                this.image = params['img'];
                this.desc = params['desc'];
            });
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}

