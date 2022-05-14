import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { loadProductlist } from './redux/product-management.actions'
import {
    selectProductlist,
    selectProductlistLoading,
    selectProductlistLoadingError,
} from './redux/product-management.selectors'

@Component({
    selector: 'app-product-management',
    templateUrl: './product-management.component.html',
})
export class ProductManagementComponent implements OnInit, OnDestroy {
    subscriptions = new Subscription()

    productlist$ = this.store.select(selectProductlist)

    loading$ = this.store.select(selectProductlistLoading)

    error$ = this.store.select(selectProductlistLoadingError)

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadProductlist())
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe()
    }
}
