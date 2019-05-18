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
					<tr *ngFor="let product of all_product_data">
						<th scope="row" class="text-center">{{all_product_data.indexOf(product)+1}}</th>
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

	constructor(private _productsService: ProductsService) { }

	ngOnInit() {
		this._productsService.getAllProducts()
			.subscribe(res => {

				let product = res;
        let product_data = product["data"];
				let products = product_data.map(data => {
					return {
						id: data.id,
						name_product: data.name_product,
						price_product: data.price_product
					}
				})
				return this.all_product_data = products
			}),
			(error => {
				this.errorMsg = JSON.stringify(error)
			});
	}

}
