import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';


@NgModule({
  declarations: [
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    FormsModule
  ]
})
export class AppLayoutModule { }
