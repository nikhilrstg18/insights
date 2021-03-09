import { AfterContentInit, Component, Input, OnInit } from '@angular/core'
import { CpuEnum } from 'src/app/shared/enums/cpu.enum'
import { MetricEnum } from 'src/app/shared/enums/metric.enum'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { FilterCard } from './../../../shared/models/filter-card'

@Component({
	selector: 'i-pcs-filters',
	templateUrl: './pcs-filters.component.html',
	styleUrls: ['./pcs-filters.component.scss'],
})
export class PcsFiltersComponent implements OnInit {
	public expanded: boolean = true
	public filterCards: FilterCard[] = []
	public metricNameEnum = MetricNameEnum
	constructor() {}

	ngOnInit(): void {
		this.filterCards = this.getDefaultCardDataList()
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
				50,
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
				['0mos.', '24mos.', '48mos.']
			),
			new FilterCard(
				MetricEnum.CPU_UTIL,
				MetricNameEnum.CPU_UTIL,
				'==',
				true,
				CpuEnum.MEDIUM,
				CpuEnum.MEDIUM,
				CpuEnum.NORMAL,
				CpuEnum.HIGH,
				'PCs with',
				'CPU usage',
				'',
				['N', 'M', 'H'],
				1,
				{
					[CpuEnum.NA]: 'NA',
					[CpuEnum.NORMAL]: 'normal',
					[CpuEnum.MEDIUM]: 'medium',
					[CpuEnum.HIGH]: 'high',
				}
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
				['0%', '50%', '100%']
			),
			new FilterCard(
				MetricEnum.RAM,
				MetricNameEnum.RAM,
				'<=',
				true,
				32,
				32,
				4,
				64,
				'PCs with',
				'installed memory',
				'GB',
				['4GB', '32GB', '64GB'],
				4
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
				'storage space available',
				'%',
				['0%', '50%', '100%']
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
				['0%', '50%', '100%']
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
