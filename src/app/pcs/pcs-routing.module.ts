import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PcsFiltersComponent } from './components/pcs-filters/pcs-filters.component'
import { PcsGridComponent } from './components/pcs-grid/pcs-grid.component'
import { PcDetailComponent } from './pages/pc-detail/pc-detail.component'
import { PcsComponent } from './pages/pcs/pcs.component'

const PCS_ROUTES: Routes = [
	{
		path: '',
		component: PcsComponent,
	},
	{
		path: ':serviceTag',
		component: PcDetailComponent,
	},
]

@NgModule({
	imports: [RouterModule.forChild(PCS_ROUTES)],
	exports: [RouterModule],
})
export class PcsRoutingModule {
	static components: any[] = [
		PcsComponent,
		PcsFiltersComponent,
		PcsGridComponent,
		PcDetailComponent,
	]
}
