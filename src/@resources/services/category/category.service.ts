import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseHttpService {

	getCategories() {
		return this.get(`products/categories`);
	}

}
