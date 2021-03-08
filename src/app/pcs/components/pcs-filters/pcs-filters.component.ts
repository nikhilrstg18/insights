import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { MetricEnum } from './../../../shared/enums/metric.enum'
import { Component, OnInit } from '@angular/core'
import { FilterCard } from './../../../shared/models/filter-card'
import { CpuEnum } from 'src/app/shared/enums/cpu.enum'

@Component({
	selector: 'i-pcs-filters',
	templateUrl: './pcs-filters.component.html',
	styleUrls: ['./pcs-filters.component.scss'],
})
export class PcsFiltersComponent implements OnInit {
	public filtersExpanded: boolean = true
	public cardDataList: FilterCard[] = []
	public metricNameEnum = MetricNameEnum
	constructor() {}

	ngOnInit(): void {
		this.cardDataList = this.getDefaultCardDataList()
	}

	getDefaultCardDataList() {
		return [
			new FilterCard(
				MetricEnum.OS_FAILURES,
				MetricNameEnum.OS_FAILURES,
				'>=',
				true,
				10,
				10,
				0,
				20,
				'PCs with',
				'OS failures',
				'',
				['0', '10', '20']
			),
			new FilterCard(
				MetricEnum.APP_FAILURES,
				MetricNameEnum.APP_FAILURES,
				'>=',
				true,
				15,
				50,
				0,
				100,
				'PCs with',
				'App failures',
				'',
				['0', '50', '100']
			),
			new FilterCard(
				MetricEnum.AGE,
				MetricNameEnum.AGE,
				'>=',
				true,
				24,
				24,
				0,
				48,
				'PCs shipped',
				'months ago',
				'',
				['0', '24', '48']
			),
			new FilterCard(
				MetricEnum.CPU_UTIL,
				MetricNameEnum.CPU_UTIL,
				'>=',
				true,
				24,
				CpuEnum.MEDIUM,
				CpuEnum.NORMAL,
				CpuEnum.HIGH,
				'PCs with',
				'CPU usage',
				'',
				['N', 'M', 'H']
			),
			new FilterCard(
				MetricEnum.RAM_UTIL,
				MetricNameEnum.RAM_UTIL,
				'>=',
				true,
				50,
				50,
				0,
				100,
				'PCs with',
				'RAM usage',
				'%',
				['0', '50', '100']
			),
			new FilterCard(
				MetricEnum.RAM,
				MetricNameEnum.RAM,
				'<=',
				true,
				32,
				4,
				32,
				64,
				'PCs with',
				'installed memory',
				'GB',
				['0', '50', '100']
			),
			new FilterCard(
				MetricEnum.STORAGE_REMAINING,
				MetricNameEnum.STORAGE_REMAINING,
				'<=',
				true,
				50,
				50,
				0,
				100,
				'PCs with',
				'storage spacea available',
				'%',
				['0', '50', '100']
			),
			new FilterCard(
				MetricEnum.BATTERY_HEALTH,
				MetricNameEnum.BATTERY_HEALTH,
				'<=',
				true,
				50,
				50,
				0,
				100,
				'PCs with',
				'overall battery performance',
				'%',
				['0', '50', '100']
			),
			new FilterCard(
				MetricEnum.BATTERY_RUNTIME,
				MetricNameEnum.BATTERY_RUNTIME,
				'<=',
				true,
				6,
				6,
				0,
				12,
				'PCs with',
				'battery life',
				'hrs',
				['0hrs', '6hrs', '12hrs']
			),
		]
	}
}
