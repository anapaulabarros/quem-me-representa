import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  search: string = '';

	constructor (private readonly searchService: SearchService) {}

	onValueChange () {
		this.searchService.searchEvent.next(this.search);
	}

}
