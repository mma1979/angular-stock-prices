import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockService, StockPrice } from '../../services/stock.service';
import { StockCardComponent } from '../stock-card/stock-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StockCardComponent],
  template: `
    <div class="dashboard">
      <h1>Stock Market Dashboard</h1>
      <div class="stock-grid">
        <app-stock-card
          *ngFor="let stock of stocks"
          [stock]="stock"
        ></app-stock-card>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 2rem;
    }
    .stock-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }
  `]
})
export class DashboardComponent implements OnInit {
  stocks: StockPrice[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.getStockUpdates().subscribe(
      updates => this.stocks = updates
    );
  }
}