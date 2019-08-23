import { AppMaterialModule } from './../app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';

import { CoreLayoutComponent} from './core-layout/core-layout.component';
import { CoreHomeComponent } from './core-home/core-home.component';
import { CoreDashboardComponent } from './core-dashboard/core-dashboard.component';

@NgModule({
  declarations: [
    CoreLayoutComponent,
    CoreHomeComponent,
    CoreDashboardComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [CoreLayoutComponent]
})
export class CoreModule { }
