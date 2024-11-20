import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockPrice } from '../../services/stock.service';

@Component({
  selector: 'app-stock-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stock-card" [ngClass]="{'positive': stock.change > 0, 'negative': stock.change < 0}">
      <h2>{{stock.symbol}}</h2>
      <div class="price">$ {{stock.price.toFixed(2)}}</div>
      <div class="change">
        {{stock.change > 0 ? '+' : ''}}{{stock.change.toFixed(2)}}
      </div>
      <div class="timestamp">
        {{stock.timestamp | date:'HH:mm:ss'}}
      </div>
    </div>
  `,
  styles: [
    `
    .stock-card {
      padding: 1rem;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin: 0.5rem;
      transition: all 0.3s ease;
    }
    .stock-card h2 {
      margin: 0;
      color: #333;
    }
    .price {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }
    .positive .change {
      color: #22c55e;
    }
    .negative .change {
      color: #ef4444;
    }
    .timestamp {
      font-size: 0.8rem;
      color: #666;
      margin-top: 0.5rem;
    }
  `,
  ],
})
export class StockCardComponent {
  @Input() stock: StockPrice = <StockPrice>{};
}
