import { DashboardService } from './../../../shared/services/dashboard.service'
import { Component, OnInit } from '@angular/core'
import { DBWidget } from '../../models/db-widget'
import { HelperService } from './../../../shared/services/helper.service'
import { Dashboard } from '../../models/dashboard'

@Component({
	selector: 'i-dash-board',
	templateUrl: './dash-board.component.html',
	styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
	public loading: boolean = true
	public systemIssues: DBWidget[] = []
	public deviceIssues: DBWidget[] = []

	constructor(
		public helperService: HelperService,
		private dashboardService: DashboardService
	) {}

	ngOnInit(): void {
		this.dashboardService.getWidgets().subscribe((dashboard: Dashboard) => {
			const { systemIssues, deviceIssues } = this.helperService.getWidgetData(
				dashboard
			)
			this.systemIssues = Object.entries(systemIssues).map(item => item[1])
			this.deviceIssues = Object.entries(deviceIssues).map(item => item[1])
			this.loading = false
		})
	}
	getQueryParam(widget: DBWidget) {
		return {
			[widget.id]: widget.threshold,
		}
	}
}
