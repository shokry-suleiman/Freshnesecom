import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
	providedIn: 'root'
})

export class ProductService extends BaseHttpService {

	getProducts(skip:number) {
		return this.get(`products?skip=${skip}`);
	}

	getProductsByCategory(category:string, skip:number) {
		return this.get(`products/category/${category}?skip=${skip}`);
	}

	searchProducts(saerch:string, skip:number){
		return this.get(`products/search?q=${saerch}&skip=${skip}`)
	}
	
}
