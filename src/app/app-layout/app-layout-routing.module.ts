import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent, children: [
      { path:'', loadChildren: () =>
			import('../product/product.module').then(
				(m) => m.ProductModule
			)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
