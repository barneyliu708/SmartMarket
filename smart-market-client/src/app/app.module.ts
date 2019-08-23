import { CoreLayoutComponent } from './core/core-layout/core-layout.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [CoreLayoutComponent]
})
export class AppModule { }
