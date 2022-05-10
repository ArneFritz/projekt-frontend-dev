import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProductManagementComponent } from './product-management.component'

@NgModule({
    declarations: [ProductManagementComponent],
    exports: [ProductManagementComponent],
    imports: [CommonModule],
})
export class ProductManagementModule {}
