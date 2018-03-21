import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressionsComponent } from './components/expressions/expressions.component';
import { ClickComponent } from './components/click/click.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'expressions', component: ExpressionsComponent},
  {path: 'click', component: ClickComponent},
  {path: 'propertybinding', component: PropertybindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
