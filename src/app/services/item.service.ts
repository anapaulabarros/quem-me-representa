import { Injectable } from '@angular/core';
import parlamentares from '../../assets/lista_parlamentares.json';

export interface Iitem {
	CodigoParlamentar: string;
	NomeCompletoParlamentar: string;
	UrlFotoParlamentar: string;
	UrlPaginaParlamentar: string;
	EmailParlamentar: string;
	MembroMesa: string;
	MembroLideranca: string;
	SiglaPartidoParlamentar: string;
	UfParlamentar: string;
}

@Injectable()
export class ItemService {
	private readonly items: Array<Iitem>;

	constructor () {
		this.items = parlamentares.parlamentares;
	}

	get itemList () {
		return this.items;
	}
}
