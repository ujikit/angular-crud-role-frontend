import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

// state management setup
import { Store, Select } from '@ngxs/store';
import { Product } from '../../models/products';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styles: []
})
export class ProductListComponent implements OnInit {

	public errorMsg;

	all_product_data: Observable<Product>;

  constructor(private store: Store) {
    this.all_product_data = this.store.select(state => state.products.products);
   }

	ngOnInit() {
	}

}
