import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { LandingPageModule } from './landing-page/landing-page.module'
import { ProductManagementComponent } from './product-management/product-management.component'
import { ProductManagementModule } from './product-management/product-management.module'

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
    },
    {
        data: {
            title: 'Products',
        },
        path: 'products',
        component: ProductManagementComponent,
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ProductManagementModule,
        LandingPageModule,
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
