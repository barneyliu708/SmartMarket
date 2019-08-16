"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import angular and its dependencies
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// import module
var app_routing_module_1 = require("./app-routing.module");
// import component
var layout_component_1 = require("./components/shared/layout/layout.component");
var home_component_1 = require("./components/home/home.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var stock_price_details_component_1 = require("./components/shared/stock-price-details/stock-price-details.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                layout_component_1.LayoutComponent,
                home_component_1.HomeComponent,
                dashboard_component_1.DashboardComponent,
                stock_price_details_component_1.StockPriceDetailsComponent
            ],
            bootstrap: [layout_component_1.LayoutComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map