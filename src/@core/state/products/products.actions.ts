import { createAction, props } from "@ngrx/store";
import { Item } from "src/@resources/models/item";

export const appLoaded = createAction(
    "[App] App Loaded",
    props<{ skip: number }>()
);


export const fetchProducts = createAction(
    "[Product API] Fetch Products",
    props<{ skip: number }>()

);

export const fetchProductsSuccess = createAction(
    "[Product API] Fetch Products Success",
    props<{ items: Item[], skip: number, total: number, limit: number }>()
);


export const fetchProductsFailed = createAction(
    "[Product API] Fetch Products Failed",
    props<{ error: any }>()
);

export const fetchCategories = createAction(
    "[Product API] Fetch Categories"
);

export const fetchCategoriesSuccess = createAction(
    "[Product API] Fetch Categories Success",

    props<{ categories: string[] }>()
);

export const fetchCategoriesFailed = createAction(
    "[Product API] Fetch  Categories Failed",
    props<{ error: any }>()
);

export const fetchProductsByCategory = createAction(
    "[Product API] Fetch Products By Category",
    props<{ category: string, skip: number }>()

);

export const fetchProductsByCategorySuccess = createAction(
    "[Product API] Fetch Products By Category Success",
    props<{ items: Item[], skip: number, limit: number, total: number }>()
);

export const fetchProductsByCategoryFailed = createAction(
    "[Product API] Fetch  Products By Category Failed",
    props<{ error: any }>()
);

export const fetchProductsSearch = createAction(
    "[Product API] Fetch Products Search",
    props<{ key: string, skip: number }>()

);

export const fetchProductsSearchSuccess = createAction(
    "[Product API] Fetch Products Search Success",

    props<{ items: Item[], skip: number, limit: number, total: number }>()
);

export const fetchProductsSearchFailed = createAction(
    "[Product API] Fetch  Products Search Failed",
    props<{ error: any }>()
);


export const addToCart = createAction(
    "[Product API] Add Products To Cart",
    props<{ itemId: number }>()
);

export const setCategoryFilter = createAction(
    "[Product API] Fiter Products By Category",
    props<{ key: string }>()

);

export const setSearchKey = createAction(
    "[Product API] Search Products By Key",
    props<{ key: string }>()
);