import { Product, Productlist } from '../product-management.model'

export interface ProductManagementState {
    productlistLoading: boolean
    productlistLoadingError: Error | string | null
    productlist: Productlist | null
    productLoading: boolean
    productLoadingError: Error | string | null
    product: Product | null
}

export const initialProductManagementState: ProductManagementState = {
    productlistLoading: false,
    productlistLoadingError: null,
    productlist: null,
    productLoading: false,
    productLoadingError: null,
    product: null,
}
