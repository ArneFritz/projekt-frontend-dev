import { Component, Inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Store } from '@ngrx/store'
import { combineLatest, map, startWith } from 'rxjs'
import { Currency } from 'src/app/shared/shared.model'
import { Category, Product } from '../../product-management.model'
import { updateProduct } from '../../redux/product-management.actions'

@Component({
    selector: 'app-product-edit-dialog',
    templateUrl: './product-edit-dialog.component.html',
})
export class ProductEditDialogComponent {
    Currency = Currency
    Categories = Object.values(Category)

    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: {
            product: Product
        },
        private dialogRef: MatDialogRef<ProductEditDialogComponent>,
        private fb: FormBuilder,
        private store: Store
    ) {}

    editFormGroup = this.fb.group({
        name: [this.data.product.name, Validators.required],
        producer: [this.data.product.producer, Validators.required],
        priceValue: [this.data.product.price?.value, [Validators.required]],
        currency: [this.data.product.price?.currency, Validators.required],
        onSale: [this.data.product.onSale],
        description: [this.data.product.description],
        categories: [this.data.product.categories],
    })

    checkFormControlForError(controlName: string, errorName: string): boolean {
        return this.editFormGroup.get(controlName)?.hasError(errorName) || false
    }

    haveValueChanged$ = combineLatest([
        this.editFormGroup.controls['name'].valueChanges.pipe(
            startWith(this.data.product.name)
        ),
        this.editFormGroup.controls['producer'].valueChanges.pipe(
            startWith(this.data.product.producer)
        ),
        this.editFormGroup.controls['priceValue'].valueChanges.pipe(
            startWith(this.data.product.price?.value)
        ),
        this.editFormGroup.controls['currency'].valueChanges.pipe(
            startWith(this.data.product.price?.currency)
        ),
        this.editFormGroup.controls['onSale'].valueChanges.pipe(
            startWith(this.data.product.onSale)
        ),
        this.editFormGroup.controls['description'].valueChanges.pipe(
            startWith(this.data.product.description)
        ),
        this.editFormGroup.controls['categories'].valueChanges.pipe(
            startWith(this.data.product.categories)
        ),
    ]).pipe(
        map(
            ([
                name,
                producer,
                priceValue,
                currency,
                onSale,
                description,
                categories,
            ]) => {
                return (
                    name !== this.data.product.name ||
                    producer !== this.data.product.producer ||
                    priceValue !== this.data.product.price?.value ||
                    currency !== this.data.product.price?.currency ||
                    onSale !== this.data.product.onSale ||
                    description !== this.data.product.description ||
                    categories !== this.data.product.categories
                )
            }
        )
    )

    closeDialog() {
        this.dialogRef.close()
    }

    submitChanges() {
        let updatedProduct: Partial<Product> = {}

        if (this.editFormGroup.get('name')?.value !== this.data.product.name) {
            updatedProduct = {
                ...updatedProduct,
                name: this.editFormGroup.get('name')?.value,
            }
        }

        if (
            this.editFormGroup.get('producer')?.value !==
            this.data.product.producer
        ) {
            updatedProduct = {
                ...updatedProduct,
                producer: this.editFormGroup.get('producer')?.value,
            }
        }

        if (
            this.editFormGroup.get('priceValue')?.value !==
                this.data.product.price?.value ||
            this.editFormGroup.get('currency')?.value !==
                this.data.product.price?.currency
        ) {
            updatedProduct = {
                ...updatedProduct,
                price: {
                    value: this.editFormGroup.get('priceValue')?.value,
                    currency: this.editFormGroup.get('currency')?.value,
                },
            }
        }

        if (
            this.editFormGroup.get('onSale')?.value !== this.data.product.onSale
        ) {
            updatedProduct = {
                ...updatedProduct,
                onSale: this.editFormGroup.get('onSale')?.value,
            }
        }

        if (
            this.editFormGroup.get('description')?.value !==
            this.data.product.description
        ) {
            updatedProduct = {
                ...updatedProduct,
                description: this.editFormGroup.get('description')?.value,
            }
        }

        if (
            this.editFormGroup.get('categories')?.value !==
            this.data.product.categories
        ) {
            updatedProduct = {
                ...updatedProduct,
                categories: this.editFormGroup.get('categories')?.value,
            }
        }

        if (updateProduct.length > 0) {
            this.store.dispatch(updateProduct({ product: updatedProduct }))
        }
        this.dialogRef.close()
    }
}
