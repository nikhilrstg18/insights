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
			'PCs with OS failures >= {0}',
			12,
			24,
			0.19
		),
		new DBWidget(
			'App Failures',
			'shield-check',
			'PCs with <= {0}% app failures',
			12,
			24,
			0.19
		),
		new DBWidget(
			'Age',
			'hourglass',
			'PCs shipped {0} months ago',
			12,
			24,
			0.19
		),
	]
	public deviceIssues: DBWidget[] = [
		new DBWidget(
			'CPU Utilization',
			'cpu',
			'PCs with {0} CPU utilization',
			0,
			16,
			0.12
		),
		new DBWidget(
			'Ram Utilization',
			'resistor',
			'PCs with ram utilization >= {0}%',
			25,
			24,
			0.19
		),
		new DBWidget(
			'Installed Memory',
			'memory',
			'PCs with ram <= {0}GB',
			20,
			16,
			0.12
		),
		new DBWidget(
			'Storage Remaining',
			'hard-disk',
			'PCs with storage reamining <= {0}%',
			20,
			24,
			0.19
		),
		new DBWidget(
			'Battery Health',
			'battery',
			'PCs with battery health <= {0}%',
			20,
			24,
			0.19
		),
		new DBWidget(
			'Battery Runtime',
			'bolt',
			'PCs with battery runtime <= {0}hr',
			20,
			24,
			0.19
		),
	]

	constructor() {}

	ngOnInit(): void {}
}
