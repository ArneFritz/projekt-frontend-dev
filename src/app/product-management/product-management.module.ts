import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProductManagementComponent } from './product-management.component'
import { ProductManagementEffects } from './redux/product-management.effects'
import {
    productManagementFeatureKey,
    productManagenementReducer,
} from './redux/product-management.reducer'
import { ProductManagementState } from './redux/product-management.state'

@NgModule({
    declarations: [ProductManagementComponent],
    entryComponents: [ProductManagementComponent],
    exports: [ProductManagementComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature<ProductManagementState>(
            productManagementFeatureKey,
            productManagenementReducer
        ),
        EffectsModule.forFeature([ProductManagementEffects]),
    ],
})
export class ProductManagementModule {}
