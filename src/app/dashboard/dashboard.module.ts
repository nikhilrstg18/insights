import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [...DashboardRoutingModule.components],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
