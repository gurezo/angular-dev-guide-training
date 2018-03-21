import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressionsComponent } from './components/expressions/expressions.component';
import { ClickComponent } from './components/click/click.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { AttributebindingComponent } from './components/attributebinding/attributebinding.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'expressions', component: ExpressionsComponent},
  {path: 'click', component: ClickComponent},
  {path: 'propertybinding', component: PropertybindingComponent},
  {path: 'attributebinding', component: AttributebindingComponent},
  {path: 'classbinding', component: ClassbindingComponent},
  {path: 'stylebinding', component: StylebindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
