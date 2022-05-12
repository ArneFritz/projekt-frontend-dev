import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { loadProductlist } from './redux/product-management.actions'
import { selectProductlist } from './redux/product-management.selectors'

@Component({
    selector: 'app-product-management',
    templateUrl: './product-management.component.html',
    styleUrls: ['./product-management.component.scss'],
})
export class ProductManagementComponent implements OnInit, OnDestroy {
    subscriptions = new Subscription()

    products$ = this.store.select(selectProductlist)

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(loadProductlist())
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe()
    }
}
