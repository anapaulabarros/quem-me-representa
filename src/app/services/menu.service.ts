import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface IMenu {
	img: string;
	text: string;
}

@Injectable()
export class MenuService {
	private readonly menu: Array<IMenu> = [
		{
			img: './assets/images/states/all.png',
			text: 'BR'
		},
		{
			img: './assets/images/states/ac.png',
			text: 'AC'
		},
		{
			img: './assets/images/states/al.png',
			text: 'AL'
		},
		{
			img: './assets/images/states/am.png',
			text: 'AM'
		},
		{
			img: './assets/images/states/ba.png',
			text: 'BA'
		},
		{
			img: './assets/images/states/ce.png',
			text: 'CE'
		},
		{
			img: '/assets/images/states/df.png',
			text: 'DF'
		},
		{
			img: '/assets/images/states/es.png',
			text: 'ES'
		},
		{
			img: '/assets/images/states/go.png',
			text: 'GO'
		},
		{
			img: '/assets/images/states/mt.png',
			text: 'MT'
		},
		{
			img: '/assets/images/states/mts.png',
			text: 'MS'
		},
		{
			img: '/assets/images/states/mg.png',
			text: 'MG'
		},
		{
			img: '/assets/images/states/pa.png',
			text: 'PA'
		},
		{
			img: '/assets/images/states/pb.png',
			text: 'PB'
		},
		{
			img: '/assets/images/states/para.png',
			text: 'PR'
		},
		{
			img: '/assets/images/states/pe.png',
			text: 'PE'
		},
		{
			img: '/assets/images/states/pi.png',
			text: 'PI'
		},
		{
			img: '/assets/images/states/rj.png',
			text: 'RJ'
		},
		{
			img: '/assets/images/states/rn.png',
			text: 'RN'
		},
		{
			img: '/assets/images/states/rio_grande_SUL.png',
			text: 'RS'
		},
		{
			img: '/assets/images/states/ro.png',
			text: 'RO'
		},
		{
			img: '/assets/images/states/rondonia.png',
			text: 'RR'
		},
		{
			img: '/assets/images/states/sc.png',
			text: 'SC'
		},
		{
			img: '/assets/images/states/sp.png',
			text: 'SP'
		},
		{
			img: '/assets/images/states/se.png',
			text: 'SE'
		},
		{
			img: '/assets/images/states/to.png',
			text: 'TO'
		}
	];

	private readonly menuSubject: Subject<string>;

	constructor () {
		this.menuSubject = new Subject();
	}

	get menuItems () {
		return this.menu;
	}

	get getSubject () {
		return this.menuSubject;
	}
}
