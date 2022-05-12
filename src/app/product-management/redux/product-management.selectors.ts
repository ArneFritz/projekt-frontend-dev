import { createSelector } from '@ngrx/store'
import { selectProductManagement } from 'src/app/redux'
import { ProductManagementState } from './product-management.state'

export const selectProductlist = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.productlist?.products
)

export const selectLoadedProduct = createSelector(
    selectProductManagement,
    (state: ProductManagementState) => state.product
)
