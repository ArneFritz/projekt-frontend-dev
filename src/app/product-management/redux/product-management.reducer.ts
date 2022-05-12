import { createReducer, on } from '@ngrx/store'
import * as ProductManagementActions from './product-management.actions'
import {
    initialProductManagementState,
    ProductManagementState,
} from './product-management.state'

export const productManagementFeatureKey = 'productManagement'

export const productManagenementReducer = createReducer(
    initialProductManagementState,

    // Productlist

    on(
        ProductManagementActions.loadProductlist,
        (state): ProductManagementState => ({
            ...state,
            productlistLoading: true,
        })
    ),

    on(
        ProductManagementActions.loadproductlistSuccess,
        (state, { productlist }): ProductManagementState => ({
            ...state,
            productlistLoading: false,
            productlistLoadingError: null,
            productlist,
        })
    ),

    on(
        ProductManagementActions.loadproductlistError,
        (state, { error }): ProductManagementState => ({
            ...state,
            productlistLoading: false,
            productlistLoadingError: error,
        })
    ),

    // Product

    on(
        ProductManagementActions.loadProduct,
        (state): ProductManagementState => ({
            ...state,
            productLoading: true,
            product: null,
        })
    ),

    on(
        ProductManagementActions.loadproductSuccess,
        (state, { product }): ProductManagementState => ({
            ...state,
            productLoading: false,
            productLoadingError: null,
            product,
        })
    ),

    on(
        ProductManagementActions.loadproductError,
        (state, { error }): ProductManagementState => ({
            ...state,
            productLoading: false,
            productLoadingError: error,
            product: null,
        })
    )
)
