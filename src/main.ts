import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  template: `<app-dashboard></app-dashboard>`
})
export class App {}

bootstrapApplication(App);