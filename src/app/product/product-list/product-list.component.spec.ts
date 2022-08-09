import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/@core/state/products';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
	let component: ProductListComponent;
	let fixture: ComponentFixture<ProductListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductListComponent],
			providers: [{ provide: Store }, provideMockStore({ initialState })]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
