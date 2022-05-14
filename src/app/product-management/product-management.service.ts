import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { Currency } from '../shared/shared.model'
import { Category, Product, Productlist } from './product-management.model'

export const productlistResponseMock: Productlist = {
    products: [
        {
            name: 'Sportschuh',
            producer: 'Nike',
            onSale: false,
            price: { value: 80, currency: Currency.EUR },
            productId: '2348R7-R3423',
            imageUrl: '/assets/images/product-management/sneakers.jpg',
        },
        {
            name: 'Kopfhörer',
            producer: 'NewComp',
            onSale: true,
            price: { value: 40, currency: Currency.EUR },
            productId: '8PP432-DD342',
            imageUrl: '/assets/images/product-management/headphone.jpg',
        },
        {
            name: 'Uhr',
            producer: 'SportsInc',
            onSale: false,
            price: { value: 110, currency: Currency.EUR },
            productId: '67PT5W-E12TT',
            imageUrl: '/assets/images/product-management/watch.jpg',
        },
    ],
}

const shoeDescription =
    'Laufschuh \n\n\
Obermaterial: Kunststoff/Textil \n\
Innenmaterial: Synthetik \n\
Sohle: Abriebfester Gummi \n\
Sportart: Laufen \n\
Verschluss: Schnürung \n\
Farbe: Rot \n\
Außensohle: Flexibel \n\
Innensohle: Gepolstert'

export const productShoeResponseMock: Product = {
    name: 'Sportschuh',
    producer: 'Nike',
    onSale: false,
    price: { value: 80, currency: Currency.EUR },
    productId: '2348R7-R3423',
    imageUrl: '/assets/images/product-management/sneakers.jpg',
    categories: [Category.SPORT, Category.SHOE, Category.RUNNING],
    description: shoeDescription,
}

const headphoeDescription =
    'Bluetooth Kopfhörer\n\nBauform: Over Ear\nMaterial: Kunststoff\nAkku-Laufzeit: 30h\nFarbe: Schwarz\nGewicht: 250g'

export const productHeadphoneResponseMock: Product = {
    name: 'Kopfhörer',
    producer: 'NewComp',
    onSale: true,
    price: { value: 40, currency: Currency.EUR },
    productId: '8PP432-DD342',
    imageUrl: '/assets/images/product-management/headphone.jpg',
    categories: [Category.HEADPHONE, Category.BLUETOOTH],
    description: headphoeDescription,
}

const watchDescription =
    'Smartwatch\n\nMaterial: Kunststoff\nAkku-Laufzeit: bis zu 7 Tage\nFarbe: Weiss\nGewicht: 77g\nSonstiges: wasserdicht, Sicherheitsglas'

export const productWatchResponseMock: Product = {
    name: 'Uhr',
    producer: 'SportsInc',
    onSale: false,
    price: { value: 110, currency: Currency.EUR },
    productId: '67PT5W-E12TT',
    imageUrl: '/assets/images/product-management/watch.jpg',
    categories: [Category.WATCH, Category.SPORT],
    description: watchDescription,
}

@Injectable({
    providedIn: 'root',
})
export class ProductManagementService {
    // constructor(private http: HttpClient) {}

    getProductlist(): Observable<Productlist> {
        //return this.http.get<Productlist>('https://hired/products/productlist')

        return of(productlistResponseMock).pipe(delay(700))
    }

    getProduct(productId: string | null): Observable<Product | null> {
        // return this.http.get<Product>(`https://hired/products/${productId}`)

        switch (productId) {
            case '2348R7-R3423':
                return of(productShoeResponseMock).pipe(delay(700))
            case '8PP432-DD342':
                return of(productHeadphoneResponseMock).pipe(delay(700))
            case '67PT5W-E12TT':
                return of(productWatchResponseMock).pipe(delay(700))
            default:
                return of(null).pipe(delay(700))
        }
    }

    updateProduct(productValues: Partial<Product>) {
        console.log(productValues)

        // return this.http.patch<void>(
        //     `https://hired/products/${product.productId}`,
        //     productValues
        // )

        return of(productValues).pipe(delay(700))
    }
}
