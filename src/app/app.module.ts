import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ExpressionsComponent } from './expressions/expressions.component';
import { ClickComponent } from './click/click.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    ClickComponent,
    PropertybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
