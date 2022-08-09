import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class BaseHttpService {

	constructor(public http: HttpClient) { }

	get(url: string, headers?: any) {
		return this.http.get(`${environment.url}${url}`, {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				...this._Authorization(),
				...headers,
			}),
		});
	}

	post(url: string, body: any, headers?: any) {
		return this.http.post(`${environment.url}${url}`, body, {
			headers: new HttpHeaders({
				...this._Authorization(),
				...headers,
			}),
		});
	}

	_Authorization() {
		return {};
	}
}
