import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/products';
import { FetchProduct, AddProduct, DeleteProduct } from '../actions/product.action';
import { ProductsService } from '../services/products.service'

export class ProductStateModel {
	products: Product[];
}

@State<ProductStateModel>({
	name: 'products',
	defaults: {
		products: []
	}
})

export class ProductState {
	constructor(private _productsService: ProductsService) { }

	@Selector()
	static getProducts(state: ProductStateModel) {
		return state.products;
	}

	@Action(AddProduct)
	add({ getState, patchState }: StateContext<ProductStateModel>, { payload }: AddProduct) {
		const state = getState();
		patchState({
			products: [...state.products, payload]
		});
	}

	@Action(DeleteProduct)
	delete({ getState, setState, patchState }: StateContext<ProductStateModel>, { payload }: DeleteProduct) {
		const state = getState();
		// patchState({
		// 	products: state.products.splice(payload.id, 1)
		// });
		const filteredArray = state.products.filter(item => item.id !== payload.id);
		setState({
			...state,
			products: filteredArray,
		});
	}

	@Action(FetchProduct)
	fetch({ getState, patchState }: StateContext<ProductStateModel>, { payload }: FetchProduct) {
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
				return patchState({
					products: [...products]
				});
			}),
			(error => {
				window.alert(error);
			});
	}

}
