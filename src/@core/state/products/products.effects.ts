import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";

import { switchMap, map, catchError, tap, take } from "rxjs/operators";
import { CategoryService } from "src/@resources/services/category/category.service";
import { ProductService } from "src/@resources/services/product/product.service";
import * as ProductsActions from "./products.actions";

@Injectable()
export class ProductsEffects {

	constructor(private actions$: Actions<any>, private productService: ProductService,
		private categoryService: CategoryService) { }

	fetchProducts$ = createEffect(() =>
		(this.actions$ as any).pipe(
			ofType(ProductsActions.appLoaded.type, ProductsActions.fetchProducts.type),
			switchMap((action: any) =>
				this.productService.getProducts(action.skip).pipe(
					map((res: any) =>
						ProductsActions.fetchProductsSuccess({ items: res.products, skip: res.skip, limit: res.limit, total: res.total })
					),
					catchError((error) =>
						of(ProductsActions.fetchProductsFailed({ error: error }))
					)
				)
			)
		)
	);

	fetchCategories$ = createEffect(() =>
		(this.actions$ as any).pipe(
			ofType(ProductsActions.appLoaded.type),
			switchMap(() =>
				this.categoryService.getCategories().pipe(
					map((data: any) =>
						ProductsActions.fetchCategoriesSuccess({ categories: data })
					),
					catchError((error) =>
						of(ProductsActions.fetchCategoriesFailed({ error: error }))
					)
				)
			)
		)
	);

	fetchProductsByCategory$ = createEffect(() =>
		(this.actions$ as any).pipe(
			ofType(ProductsActions.fetchProductsByCategory.type),
			switchMap((action: any) =>
				this.productService.getProductsByCategory(action.category, action.skip).pipe(
					map((res: any) =>
						ProductsActions.fetchProductsByCategorySuccess({ items: res.products, skip: res.skip, limit: res.limit, total: res.total })
					),
					catchError((error) =>
						of(ProductsActions.fetchProductsByCategoryFailed({ error: error }))
					)
				)
			)
		)
	);

	fetchProductsSearch$ = createEffect(() =>
		(this.actions$ as any).pipe(
			ofType(ProductsActions.fetchProductsSearch.type),
			switchMap((action: any) =>
				this.productService.searchProducts(action.key, action.skip).pipe(
					map((res: any) =>
						ProductsActions.fetchProductsSearchSuccess({ items: res.products, skip: res.skip, limit: res.limit, total: res.total })
					),
					catchError((error) =>
						of(ProductsActions.fetchProductsSearchFailed({ error: error }))
					)
				)
			)
		)
	);

}