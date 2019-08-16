import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IStockPrice } from '../../stock-price/stock-price.interface';
import { StockPriceService } from '../../stock-price/stock-price.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [StockPriceService]
})
export class DashboardComponent {
    private _stockService: StockPriceService;
    private _router: Router;

    stockprices: IStockPrice[];

    constructor(stockService: StockPriceService, router: Router) {
        this._stockService = stockService;
        this._router = router;
    }

    ngOnInit(): void {
        this._stockService.getstockprices()
            .subscribe(stockprices => this.stockprices = stockprices);
    }

    onBackToHome(): void {
        this._router.navigate(['/home']);
    }
}
