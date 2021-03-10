import { Component, OnInit } from '@angular/core'
import { DBWidget } from '../../models/db-widget'

@Component({
	selector: 'i-dash-board',
	templateUrl: './dash-board.component.html',
	styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
	public systemIssues: DBWidget[] = [
		new DBWidget(
			'OS Failures',
			'computer',
			'PCs with >= {0} OS failures',
			12,
			24,
			0.19
		),
		new DBWidget(
			'App Failures',
			'application',
			'PCs with <= {0} app failures',
			12,
			24,
			0.19
		),
		new DBWidget(
			'PC Age',
			'hourglass',
			'PCs shipped {0} months ago',
			12,
			24,
			0.19
		),
	]
	public deviceIssues: DBWidget[] = [
		new DBWidget('CPU', 'cpu', 'PCs with {0} CPU usage', 0, 16, 0.12),
		new DBWidget(
			'Ram Utilization',
			'resistor',
			'PCs with >= {0}% ram usage',
			25,
			24,
			0.19
		),
		new DBWidget(
			'Installed Memory',
			'memory',
			'PCs with <= {0}GB installed memory',
			20,
			16,
			0.12
		),
		new DBWidget(
			'Storage Remaining',
			'hard-disk',
			'PCs with <= {0}% storage space available',
			20,
			24,
			0.19
		),
		new DBWidget(
			'Battery Health',
			'battery',
			'PCs with <= {0}% battery life',
			20,
			24,
			0.19
		),
		new DBWidget(
			'Battery Runtime',
			'bolt',
			'PCs with <= {0}hr battery runtime',
			20,
			24,
			0.19
		),
	]

	constructor() {}

	ngOnInit(): void {}
}
