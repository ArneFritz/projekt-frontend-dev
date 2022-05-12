import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { LandingPageModule } from './landing-page/landing-page.module'
import { ProductDetailsComponent } from './product-management/product-details/product-details.component'
import { ProductManagementComponent } from './product-management/product-management.component'
import { ProductManagementModule } from './product-management/product-management.module'

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        component: ProductManagementComponent,
        path: 'products',
    },
    {
        component: ProductDetailsComponent,
        path: 'products/:productId',
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        LandingPageModule,
        ProductManagementModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
