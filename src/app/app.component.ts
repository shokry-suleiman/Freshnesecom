import { Component } from '@angular/core';
import { appLoaded } from 'src/@core/state/products';
import { Store } from "@ngrx/store";
import { skip } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'freshnesecom';

	constructor(private store: Store) {
		this.store.dispatch(appLoaded({ skip: 0 }));
	}

}
