import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ExpressionsComponent } from './components/expressions/expressions.component';
import { ClickComponent } from './components/click/click.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { AttributebindingComponent } from './components/attributebinding/attributebinding.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpressionsComponent,
    ClickComponent,
    PropertybindingComponent,
    AttributebindingComponent,
    ClassbindingComponent,
    StylebindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
