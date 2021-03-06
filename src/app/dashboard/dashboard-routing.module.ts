import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DBCardComponent } from './components/dbcard/dbcard.component';
import { DBWidgetComponent } from './components/dbwidget/dbwidget.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  static components: any[] = [
    DashBoardComponent,
    DBCardComponent,
    DBWidgetComponent,
  ];
}
