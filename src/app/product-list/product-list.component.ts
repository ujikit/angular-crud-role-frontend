import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service'

@Component({
	selector: 'app-product-list',
	template: `
		<div class="container" style="margin-top: 60px">
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
					<tr *ngFor="let product of product_names">
						<th scope="row" class="text-center">{{product_names.indexOf(product)+1}}</th>
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

	public product_names = [];
	public errorMsg;

	constructor(private _productsService: ProductsService) { }

	ngOnInit() {
		this._productsService.getAllProducts()
			.subscribe(res => {
				this.product_names = res.data
			}),
			(error => {
				this.errorMsg = JSON.stringify(error)
			});
	}

}
