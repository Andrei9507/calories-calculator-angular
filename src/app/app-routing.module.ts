import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { QuantitiesComponent } from './components/quantities/quantities.component';
import { HistoryQuantityComponent } from './components/history-quantity/history-quantity.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'quantities', component: QuantitiesComponent },
  { path: 'history', component: HistoryQuantityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
