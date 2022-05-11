import { createFeatureSelector } from '@ngrx/store'
import { productManagementFeatureKey } from '../product-management/redux/product-management.reducer'
import { ProductManagementState } from '../product-management/redux/product-management.state'

export interface AppState {
    productManagement?: ProductManagementState
}

export const selectProductManagement =
    createFeatureSelector<ProductManagementState>(productManagementFeatureKey)
