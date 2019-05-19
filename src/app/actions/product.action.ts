import { Product } from '../models/products';

export class AddProduct {
    static readonly type = '[Product] Add';

    constructor(public payload: Product) {}
}
