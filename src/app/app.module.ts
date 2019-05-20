import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// state management setup
import { ProductState } from './states/product.state';

@NgModule({
	declarations: [
		AppComponent,
		routingComponents
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		// state management
		NgxsModule.forRoot([
			ProductState
		]),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		NgxsLoggerPluginModule.forRoot(),
		// ./state management
		ReactiveFormsModule,
		NgbPaginationModule // bootstrap pagination
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
