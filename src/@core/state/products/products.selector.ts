import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.state";

export const products = createFeatureSelector<ProductsState>("products");

export const selectItemsList = createSelector(
  products,
  (state: ProductsState) => state.items
);

export const selectTotal = createSelector(
  products,
  (state: ProductsState) => state.total
);

export const selectLimit = createSelector(
  products,
  (state: ProductsState) => state.limit
);

export const selectSkip = createSelector(
  products,
  (state: ProductsState) => state.skip
);

export const selectCategoryList = createSelector(
  products,
  (state: ProductsState) => state.categories
);

export const selecTotalQuantity = createSelector(
  products,
  (state: ProductsState) => state.totalQuantity
);

export const selectCategoryFilter = createSelector(
  products,
  (state: ProductsState) => state.categoryFilter
);

export const selectSearchkey = createSelector(
  products,
  (state: ProductsState) => state.searchKey
);