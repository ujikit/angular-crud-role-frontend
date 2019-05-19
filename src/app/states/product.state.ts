import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/products';
import { AddProduct } from '../actions/product.action';

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
}
