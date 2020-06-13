import { Component, Input } from '@angular/core';

@Component({
	selector: 'item-app',
	templateUrl: './item.component.html',
	styleUrls: [ './item.component.scss' ]
})
export class ItemComponent {
	@Input('CodigoParlamentar') CodigoParlamentar: string;
	@Input('NomeCompletoParlamentar') NomeCompletoParlamentar: string;
	@Input('UrlFotoParlamentar') UrlFotoParlamentar: string;
	@Input('UrlPaginaParlamentar') UrlPaginaParlamentar: string;
	@Input('EmailParlamentar') EmailParlamentar: string;
	@Input('MembroMesa') MembroMesa: string;
	@Input('MembroLideranca') MembroLideranca: string;
	@Input('SiglaPartidoParlamentar') SiglaPartidoParlamentar: string;
	@Input('UfParlamentar') UfParlamentar: string;

}
