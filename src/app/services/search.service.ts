import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
	private readonly searchSubject: Subject<string>;

	constructor () {
		this.searchSubject = new Subject();
	}

	get searchEvent () {
		return this.searchSubject;
	}
}
