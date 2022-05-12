import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductDetailsModule } from './product-management/product-details/product-details.module'
import { HeaderModule } from './shared/components/header/header.module'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductDetailsModule,
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({}),
        EffectsModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
