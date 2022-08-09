import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { fetchProducts, fetchProductsByCategory, fetchProductsSearch, selectCategoryFilter, selectItemsList, selectLimit, selectSearchkey, selectSkip, selectTotal } from "src/@core/state/products";

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	itemsList$ = this.store.select(selectItemsList);
	page: number = 1;
	total!: number;
	limit!: number;
	skip!: number;
	searchKey!: string;
	categoryFilter!: string;
	productsLength!: number;
	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.store.select(selectTotal).subscribe(res => this.total = res)
		this.store.select(selectLimit).subscribe(res => this.limit = res)
		this.store.select(selectSkip).subscribe(res => this.skip = res)
		this.store.select(selectCategoryFilter).subscribe(res => this.categoryFilter = res)
		this.store.select(selectSearchkey).subscribe(res => this.searchKey = res);
		this.store.select(selectItemsList).subscribe(res => this.productsLength = res.length);
	}

	onScroll() {
		//wait till getting first skip 0
		if (this.productsLength == 0)
			return;

		if (this.limit + Number(this.skip) >= this.total)
			return;

		this.page = this.skip == 0 ? 1 : this.page;
		if (this.searchKey != '')
			this.store.dispatch(fetchProductsSearch({ key: this.searchKey, skip: this.page * this.limit }));
		else if (this.categoryFilter != 'all categories')
			this.store.dispatch(fetchProductsByCategory({ category: this.categoryFilter, skip: this.page * this.limit }));
		else
			this.store.dispatch(fetchProducts({ skip: this.page * this.limit }));
		++this.page;

	}
}
