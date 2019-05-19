import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// state management setup
import { Store } from '@ngxs/store';
import { FetchProduct, AddProduct } from '../../actions/product.action';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

	angForm: FormGroup;

	constructor(private fb: FormBuilder, private store: Store) {
		this.createForm();
	}

	createForm() {
		this.angForm = this.fb.group({
			name_product: ['', Validators.required],
			price_product: ['', Validators.required]
		});
	}

	addProduct(name_product, price_product) {
		this.store.dispatch(new AddProduct({ name_product, price_product }));
	}

	ngOnInit() {
		this.store.dispatch(new FetchProduct());
	}

}
