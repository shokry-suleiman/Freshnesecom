import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from 'src/@core/state/products';

import { AppSidebarComponent } from './app-sidebar.component';

describe('AppSidebarComponent', () => {
	let component: AppSidebarComponent;
	let fixture: ComponentFixture<AppSidebarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppSidebarComponent],
			providers: [{ provide: Store },provideMockStore({initialState})]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppSidebarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
