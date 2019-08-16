import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IStockPrice } from './stock-price.interface';

@Injectable()
export class StockPriceService {
    private _stockurl = 'app/stock-prices.json';
    private _http: Http;
    constructor(http: Http) {
        this._http = http;
    }

    getstockprices(): Observable<IStockPrice[]> {
        return this._http.get(this._stockurl)
            .map((response: Response) => <IStockPrice[]>response.json())
            .do(data => console.log(JSON.stringify(data)));
    }
}