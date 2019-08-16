import { Component, Input } from '@angular/core';

import { IStockPrice } from '../../../stock-price/stock-price.interface';

@Component({
    selector: 'stock-price-details',
    templateUrl: './stock-price-details.component.html'
})
export class StockPriceDetailsComponent {
    @Input() stockPriceDetails: IStockPrice;
}