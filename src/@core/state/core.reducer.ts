import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as ProductsReducer from "./products/products.reducer";

export const reducers: ActionReducerMap<State> = {
	products: ProductsReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];