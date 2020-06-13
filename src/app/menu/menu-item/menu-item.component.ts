import { Component, Input } from '@angular/core';

@Component({
	selector: 'menu-item-app',
	templateUrl: './menu-item.component.html',
	styleUrls: [ './menu-item.component.scss' ]
})
export class MenuItemComponent {
	@Input('text') text: string;
	@Input('img') img: string;
	@Input('active') active: boolean = false;
}
