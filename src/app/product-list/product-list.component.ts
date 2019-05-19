import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service'

// state management setup
import { Store, Select } from '@ngxs/store';
import { Product } from '../product-list/products';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-product-list',
	template: `
		<div class="container">
			<table class="table">
				<thead>
					<tr>
						<th scope="col" class="text-center">No.</th>
						<th scope="col" class="text-center">Name Product</th>
						<th scope="col" class="text-center">Price</th>
						<th scope="col" class="text-center">Action</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let product of all_product_data | async">
						<th scope="row" class="text-center">no_expected</th>
						<td>{{product.name_product}}</td>
						<td>Rp.{{product.price_product}},-</td>
						<td class="text-center">
							<button type="button" class="btn btn-success" style="margin-right: 10px;">Edit</button>
							<button type="button" class="btn btn-danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
  `,
	styles: []
})
export class ProductListComponent implements OnInit {

	public all_product_data = [];
	public errorMsg;

	all_product_data: Observable<Product>;

  constructor(private store: Store) {
    this.all_product_data = this.store.select(state => state.products.products);
   }

	ngOnInit() {
	}

}
