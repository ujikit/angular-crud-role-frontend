import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { ProductListComponent } from './product-list/product-list.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ProductListComponent];
