import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuService } from './services/menu.service';
import { ItemListComponent } from './items/item-list.component';
import { ItemComponent } from './items/item/item.component';
import { ItemService } from './services/item.service';
import { SearchService } from './services/search.service';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MenuComponent,
		MenuItemComponent,
		ItemListComponent,
		ItemComponent,
		SearchComponent,
		FooterComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [ MenuService, ItemService, SearchService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
