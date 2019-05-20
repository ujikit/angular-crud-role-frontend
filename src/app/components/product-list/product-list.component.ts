import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

// state management setup
import { Store, Select } from '@ngxs/store';
import { Product, Pagination } from '../../models/products';
import { Observable } from 'rxjs';
import { DeleteProduct } from '../../actions/product.action';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styles: []
})
export class ProductListComponent implements OnInit {

	public errorMsg;

	all_product_data: Observable<Product>;
	all_page: any;
	page: any;

	constructor(private store: Store) {
		this.all_product_data = this.store.select(state => state.products.products);
		this.all_page = 130;
		this.page = 8;
	}

	ngOnInit() {
	}

	deleteProduct (id, name_product, price_product) {
		this.store.dispatch(new DeleteProduct({ id, name_product, price_product }));
	}

}
