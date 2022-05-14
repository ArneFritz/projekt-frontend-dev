import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { ProductCardModule } from './product-card/product-card.module'
import { ProductManagementComponent } from './product-management.component'
import { ProductManagementEffects } from './redux/product-management.effects'
import {
    productManagementFeatureKey,
    productManagenementReducer,
} from './redux/product-management.reducer'
import { ProductManagementState } from './redux/product-management.state'

@NgModule({
    declarations: [ProductManagementComponent],
    exports: [ProductManagementComponent],
    imports: [
        CommonModule,
        EffectsModule.forFeature([ProductManagementEffects]),
        MatProgressBarModule,
        ProductCardModule,
        StoreModule.forFeature<ProductManagementState>(
            productManagementFeatureKey,
            productManagenementReducer
        ),
    ],
})
export class ProductManagementModule {}
