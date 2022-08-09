import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from 'src/@core/state';

import { ProductsEffects } from "src/@core/state/products";
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from "ngx-infinite-scroll";


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		InfiniteScrollModule,
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([ProductsEffects])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
