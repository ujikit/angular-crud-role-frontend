import { Product } from '../product-list/products';

export class AddProduct {
    static readonly type = '[Product] Add';

    constructor(public payload: Product) {}
}
