import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface StockPrice {
  symbol: string;
  price: number;
  change: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class StockService {
  //private socket: WebSocket;
  private stockSubject = new BehaviorSubject<StockPrice[]>([]);

  constructor() {
    // Simulating WebSocket connection with dummy data
    this.simulateStockUpdates();
  }

  getStockUpdates(): Observable<StockPrice[]> {
    return this.stockSubject.asObservable();
  }

  private simulateStockUpdates() {
    const stocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];
    const initialPrices = new Map([
      ['AAPL', 150],
      ['GOOGL', 2800],
      ['MSFT', 300],
      ['AMZN', 3300],
      ['TSLA', 900],
    ]);

    setInterval(() => {
      const updatedStocks = stocks.map((symbol) => {
        const basePrice = initialPrices.get(symbol) || 100;
        const randomChange = (Math.random() - 0.5) * 10;
        const newPrice = basePrice + randomChange;

        return {
          symbol,
          price: Number(newPrice.toFixed(2)),
          change: Number(randomChange.toFixed(2)),
          timestamp: new Date(),
        };
      });

      this.stockSubject.next(updatedStocks);
    }, 2000);
  }
}
