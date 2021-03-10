import { Component, OnInit } from '@angular/core'
import { AlertFilters } from '../../models/alert-filters'
import { Alerts } from '../../models/alerts'

@Component({
	selector: 'i-pcd-alerts',
	templateUrl: './pcd-alerts.component.html',
	styleUrls: ['./pcd-alerts.component.scss'],
})
export class PcdAlertsComponent implements OnInit {
	public alerts: Alerts = new Alerts()
	public alertFilters: AlertFilters = this.getDefaultAlertFilters()
	constructor() {}

	ngOnInit(): void {}

	public getDefaultAlertFilters(alerts: Alerts = new Alerts()): AlertFilters {
		return new AlertFilters(
			alerts.unexpectedShutdownEvents.length,
			alerts.applicationCrashEvents.length,
			alerts.systemCrashEvents.length
		)
	}
}
