import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [...DashboardRoutingModule.components],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
