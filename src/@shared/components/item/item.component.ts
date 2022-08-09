import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/@core/state/products';
import { Item } from 'src/@resources/models/item';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() item!: Item
	constructor(private store: Store) { }

	ngOnInit(): void {
	}

	addToCart(id: number | any) {
		this.store.dispatch(addToCart({ itemId: id }))
	}

	get priceAfterDiscount(): number {
		return ((this.item?.price as number) - (this.item?.price as number) * (this.item?.discountPercentage as number) / 100) as number;
	}
}
