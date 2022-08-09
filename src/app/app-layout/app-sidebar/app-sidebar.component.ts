import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchProductsByCategory, selectCategoryList, setCategoryFilter, setSearchKey } from 'src/@core/state/products';

@Component({
	selector: 'app-sidebar',
	templateUrl: './app-sidebar.component.html',
	styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {
	categoryList$ = this.store.select(selectCategoryList);
	constructor(private store: Store) { }

	ngOnInit(): void {
	}

	filter(category: string) {
		this.store.dispatch(setCategoryFilter({ key: category }))
		this.store.dispatch(setSearchKey({ key: '' }))
		this.store.dispatch(fetchProductsByCategory({ category: category, skip: 0 }))
	}
}
