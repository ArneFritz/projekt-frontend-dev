import { Component, Input } from '@angular/core'
import { Currency, Price } from 'src/app/shared/shared.model'

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
    @Input() name = ''

    @Input() productId = ''

    @Input() producer = ''

    @Input() price: Price = { value: 0, currency: Currency.EUR }

    @Input() onSale = false

    @Input() imageUrl = ''
}
