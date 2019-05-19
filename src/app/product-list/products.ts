export interface Datum {
	id: number;
	name_product: string;
	price_product: string;
	created_at_product: Date;
	updated_at_product: Date;
}

export interface IProduct {
	status: string;
	data: Datum[];
}

export interface Product {
	name_product: any;
	price_product: any;
}
