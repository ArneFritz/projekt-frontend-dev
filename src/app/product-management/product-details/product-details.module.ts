import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { ProductDetailsComponent } from './product-details.component'

@NgModule({
    declarations: [ProductDetailsComponent],
    exports: [ProductDetailsComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class ProductDetailsModule {}
