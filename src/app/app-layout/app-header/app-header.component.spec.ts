import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/@core/state/products';

import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ],
			providers: [{ provide: Store },provideMockStore({initialState})],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all categories', () => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    const defaultButtonText = ""
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn'));
    expect(button.nativeElement.textContent.trim()).toBe(defaultButtonText) 
  })
    
});
