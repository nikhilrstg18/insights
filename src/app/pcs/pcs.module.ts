import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcsRoutingModule } from './pcs-routing.module';
import { PcsComponent } from './pages/pcs/pcs.component';
import { PcDetailComponent } from './pages/pc-detail/pc-detail.component';
import { PcsFiltersComponent } from './pages/pcs-filters/pcs-filters.component';
import { PcsGridComponent } from './components/pcs-grid/pcs-grid.component';


@NgModule({
  declarations: [PcsComponent, PcDetailComponent, PcsFiltersComponent, PcsGridComponent],
  imports: [
    CommonModule,
    PcsRoutingModule
  ]
})
export class PcsModule { }
