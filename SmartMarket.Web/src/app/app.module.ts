// import angular and its dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// import module
import { AppRoutingModule } from "./app-routing.module";

// import component
import { LayoutComponent } from './components/shared/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StockPriceDetailsComponent } from './components/shared/stock-price-details/stock-price-details.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        LayoutComponent,
        HomeComponent,
        DashboardComponent,
        StockPriceDetailsComponent
    ],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
