import { createAction, props } from '@ngrx/store'
import { Product, Productlist } from '../product-management.model'

// Load productlist from backend

export const loadProductlist = createAction(
    '[ProductManagement] Load productlist'
)

export const loadproductlistError = createAction(
    '[ProductManagement] Load productlist error',
    props<{ error: Error | string }>()
)

export const loadproductlistSuccess = createAction(
    '[ProductManagement] Load productlist success',
    props<{ productlist: Productlist }>()
)

// Load product from backend
export const loadProduct = createAction(
    '[ProductManagement] Load product',
    props<{ productId: string }>()
)

export const loadproductError = createAction(
    '[ProductManagement] Load product error',
    props<{ error: Error | string }>()
)

export const loadproductSuccess = createAction(
    '[ProductManagement] Load product success',
    props<{ product: Product }>()
)
