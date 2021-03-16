import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PcdAlertsComponent } from './components/pcd-alerts/pcd-alerts.component'
import { PcdAppsComponent } from './components/pcd-apps/pcd-apps.component'
import { PcdInfoComponent } from './components/pcd-info/pcd-info.component'
import { PcdUsageCardComponent } from './components/pcd-usage-card/pcd-usage-card.component'
import { PcdUsageComponent } from './components/pcd-usage/pcd-usage.component'
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
		PcdInfoComponent,
		PcdUsageComponent,
		PcdAlertsComponent,
		PcdAppsComponent,
		PcdUsageCardComponent,
	]
}
