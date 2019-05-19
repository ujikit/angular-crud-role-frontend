import { Product } from '../models/products';

export class AddProduct {
	static readonly type = '[Product] Add';

	constructor(public payload: Product) { }
}

export class FetchProduct {
	static readonly type = '[Product] Fetch';

	constructor(public payload: Product) { }
}
