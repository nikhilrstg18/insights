import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { DBCardComponent } from './components/dbcard/dbcard.component';
import { DBWidgetComponent } from './components/dbwidget/dbwidget.component';


@NgModule({
  declarations: [DashBoardComponent, DBCardComponent, DBWidgetComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
