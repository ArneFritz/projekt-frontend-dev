import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { ProductManagementService } from '../product-management.service'
import {
    loadProduct,
    loadproductError,
    loadProductlist,
    loadproductlistError,
    loadproductlistSuccess,
    loadproductSuccess,
} from './product-management.actions'

@Injectable()
export class ProductManagementEffects {
    loadProductlist$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProductlist),
            mergeMap(() =>
                this.productService.getProductlist().pipe(
                    map((productlist) =>
                        loadproductlistSuccess({
                            productlist,
                        })
                    ),
                    catchError((error) => of(loadproductlistError({ error })))
                )
            )
        )
    })

    loadProduct$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadProduct),
            mergeMap(({ productId }) =>
                this.productService.getProduct(productId).pipe(
                    map((product) =>
                        loadproductSuccess({
                            product,
                        })
                    ),
                    catchError((error) => of(loadproductError({ error })))
                )
            )
        )
    })

    constructor(
        private actions$: Actions,
        private productService: ProductManagementService
    ) {}
}
