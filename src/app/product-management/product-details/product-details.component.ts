import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { map, Subscription } from 'rxjs'
import { Product } from '../product-management.model'
import { loadProduct } from '../redux/product-management.actions'
import {
    selectLoadedProduct,
    selectProductLoading,
    selectProductLoadingError,
} from '../redux/product-management.selectors'
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component'

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    subscriptions = new Subscription()

    productId?: string

    product$ = this.store.select(selectLoadedProduct)

    loading$ = this.store.select(selectProductLoading)

    error$ = this.store.select(selectProductLoadingError)

    categories$ = this.product$.pipe(map((product) => product?.categories))

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.subscriptions.add(
            this.route.paramMap.subscribe((paramMap) => {
                this.productId = paramMap.get('productId') ?? ''
                this.store.dispatch(loadProduct({ productId: this.productId }))
            })
        )
    }

    openEditor(product: Product) {
        this.dialog.open(ProductEditDialogComponent, {
            width: '700px',
            data: { product },
        })
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe()
    }
}
