import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatTooltipModule } from '@angular/material/tooltip'
import { RouterModule } from '@angular/router'
import { ProductCardComponent } from './product-card.component'

@NgModule({
    declarations: [ProductCardComponent],
    exports: [ProductCardComponent],
    imports: [CommonModule, MatTooltipModule, RouterModule],
})
export class ProductCardModule {}
