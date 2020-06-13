import { Component, OnInit } from '@angular/core';
import { MenuService, IMenu } from '../services/menu.service';

@Component({
	selector: 'menu-app',
	templateUrl: './menu.component.html',
	styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
	private items: Array<IMenu>;
	private itemSelected: string;

	constructor (private readonly menuService: MenuService) {}

	ngOnInit (): void {
		this.items = this.menuService.menuItems;

		// TODO: verify if the item exists
		this.itemSelected = this.items[0].text;
	}

	isActive (item: string) {
		return item === this.itemSelected;
	}

	onClickHandle (item: string) {
		this.itemSelected = item;
		this.menuService.getSubject.next(item);
	}
}
