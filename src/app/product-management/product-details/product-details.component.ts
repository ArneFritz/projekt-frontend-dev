import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, Subscription } from 'rxjs'
import { loadProduct } from '../redux/product-management.actions'
import { selectLoadedProduct } from '../redux/product-management.selectors'

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    subscriptions = new Subscription()

    productId?: string

    product$ = this.store.select(selectLoadedProduct)

    categories$ = this.product$.pipe(map((product) => product?.categories))

    constructor(private route: ActivatedRoute, private store: Store) {}

    ngOnInit(): void {
        this.subscriptions.add(
            this.route.paramMap.subscribe((paramMap) => {
                this.productId = paramMap.get('productId') ?? ''
                this.store.dispatch(loadProduct({ productId: this.productId }))
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe()
    }
}
