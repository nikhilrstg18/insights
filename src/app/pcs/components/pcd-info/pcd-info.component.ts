import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'i-pcd-info',
	templateUrl: './pcd-info.component.html',
	styleUrls: ['./pcd-info.component.scss'],
})
export class PcdInfoComponent implements OnInit {
	public metricNameEnum = MetricNameEnum
	constructor() {}

	ngOnInit(): void {}
}
