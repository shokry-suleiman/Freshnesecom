import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchProducts, fetchProductsByCategory, fetchProductsSearch, selectCategoryFilter, selectCategoryList, selecTotalQuantity, selectSearchkey, setCategoryFilter, setSearchKey } from 'src/@core/state/products';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
	categoryList$ = this.store.select(selectCategoryList);
	totalQuantity$ = this.store.select(selecTotalQuantity);
	categoryFilter$ = this.store.select(selectCategoryFilter);
	keySearch: string = '';
	constructor(private store: Store) { }

	ngOnInit(): void {
		this.store.select(selectCategoryFilter).subscribe(res => this.keySearch = '')
	}

	filter(category: string) {
		this.store.dispatch(setCategoryFilter({ key: category }))
		this.store.dispatch(setSearchKey({ key: '' }))
		if (category == 'all categories')
			return this.store.dispatch(fetchProducts({ skip: 0 }));

		this.store.dispatch(fetchProductsByCategory({ category, skip: 0 }))
	}

	search() {
		this.store.dispatch(setCategoryFilter({ key: 'all categories' }));
		this.store.dispatch(setSearchKey({ key: this.keySearch }))
		this.store.dispatch(fetchProductsSearch({ key: this.keySearch, skip: 0 }))
	}
}
