
import { Action, createReducer, on } from "@ngrx/store";
import * as ProductsActions from "./products.actions";
import { initialState, ProductsState } from "./products.state";

const productsReducer = createReducer(
	initialState,
	on(ProductsActions.appLoaded, (state: any) => ({ ...state })),
	on(ProductsActions.fetchCategoriesSuccess, (state, { categories }) => ({
		...state,
		categories: categories
	})),
	on(ProductsActions.fetchProductsSuccess, (state, { items, limit, total, skip }) => ({
		...state,
		items: skip == 0 ? [...items] : [...state.items, ...items],
		skip: skip,
		limit: limit,
		total: total
	})),
	on(ProductsActions.setCategoryFilter, (state, { key }) => ({
		...state,
		categoryFilter: key
	})),
	on(ProductsActions.setSearchKey, (state, { key }) => ({
		...state,
		searchKey: key
	})),
	on(ProductsActions.fetchProductsByCategorySuccess, (state, { items, skip, limit, total }) => ({
		...state,
		items: skip == 0 ? [...items] : [...state.items, ...items],
		skip: skip,
		limit: limit,
		total: total
	})),
	on(ProductsActions.fetchProductsSearchSuccess, (state, { items, skip, limit, total }) => ({
		...state,
		items: skip == 0 ? [...items] : [...state.items, ...items],
		skip: skip,
		limit: limit,
		total: total
	})),
	on(ProductsActions.addToCart, (state, { itemId }) => {
		let index = state.cart.findIndex(item => item.id == itemId);
		let cart: any = [...state.cart];
		if (index != -1) {
			cart[index] = { quantity: cart[index].quantity + 1, id: cart[index].id };
		} else {
			cart.push({
				id: itemId,
				quantity: 1
			})
		}
		let totalQuantity = state.totalQuantity;
		++totalQuantity
		return ({
			...state,
			cart: cart,
			totalQuantity: totalQuantity
		})
	}),
);

export function reducer(state: ProductsState | undefined, action: Action) {
	return productsReducer(state, action);
}