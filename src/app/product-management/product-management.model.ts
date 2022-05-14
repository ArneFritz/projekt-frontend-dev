import { Price } from '../shared/shared.model'

export interface Product {
    productId?: string
    name?: string
    onSale?: boolean
    producer?: string
    imageUrl?: string
    price?: Price
    description?: string
    categories?: Category[]
}

export enum Category {
    SPORT = 'Sport',
    SHOE = 'Schuhe',
    RUNNING = 'Running',
    HEADPHONE = 'Kopfhörer',
    BLUETOOTH = 'Bluetooth',
    WATCH = 'Uhr',
}

export interface Productlist {
    products: Product[]
}
