import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressionsComponent } from './expressions/expressions.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'expressions', component: ExpressionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
