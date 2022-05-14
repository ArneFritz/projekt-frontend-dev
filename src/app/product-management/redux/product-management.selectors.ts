import { createSelector } from '@ngrx/store'
import { selectProductManagement } from 'src/app/redux'
import { ProductManagementState } from './product-management.state'

// Productlist

export const selectProductlist = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.productlist?.products
)

export const selectProductlistLoading = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.productlistLoading
)

export const selectProductlistLoadingError = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.productLoadingError
)

// Product

export const selectLoadedProduct = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.product
)

export const selectProductLoading = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.productLoading
)

export const selectProductLoadingError = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.productLoadingError
)
