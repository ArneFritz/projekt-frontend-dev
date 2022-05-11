export interface Product {
    productId: string
    name: string
    onSale: boolean
    producer: string
    price: Price
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

export type Price = {
    value: number
    currency: Currency
}

export enum Currency {
    EUR = '€',
    USD = '$',
}

export interface Productlist {
    products: Product[]
}

export enum ProductIdImageMapping {
    '2348R7-R3423' = 'sneakers.jpg',
    '8PP432-DD342' = 'headphone.jpg',
    '67PT5W-E12TT' = 'watch.jpg',
}
