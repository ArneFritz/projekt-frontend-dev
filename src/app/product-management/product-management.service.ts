import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Currency, Productlist } from './product-management.model'

export const productlistResponseMock: Productlist = {
    products: [
        {
            name: 'Sportschuh',
            producer: 'Nike',
            onSale: false,
            price: { value: 80, currency: Currency.EUR },
            productId: '2348R7-R3423',
        },
        {
            name: 'Kopfhörer',
            producer: 'NewComp',
            onSale: true,
            price: { value: 40, currency: Currency.EUR },
            productId: '8PP432-DD342',
        },
        {
            name: 'Uhr',
            producer: 'SportsInc',
            onSale: false,
            price: { value: 110, currency: Currency.EUR },
            productId: '67PT5W-E12TT',
        },
    ],
}

@Injectable({
    providedIn: 'root',
})
export class ProductManagementService {
    //constructor(private http: HttpClient) {}

    getProductlist(): Observable<Productlist> {
        //return this.http.get<Productlist>('https://hired/products/productlist')
        return of(productlistResponseMock)
    }
}
