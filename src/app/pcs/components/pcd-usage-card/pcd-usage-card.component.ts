import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { Component, Input, OnInit } from '@angular/core'
import { CpuEnum } from 'src/app/shared/enums/cpu.enum'
import { PcdUsageCard } from 'src/app/shared/models/pcd-usage-card'

@Component({
	selector: 'i-pcd-usage-card',
	templateUrl: './pcd-usage-card.component.html',
	styleUrls: ['./pcd-usage-card.component.scss'],
})
export class PcdUsageCardComponent implements OnInit {
	@Input() public usageCard!: PcdUsageCard
	public metricNameEnum = MetricNameEnum
	constructor() {}

	ngOnInit(): void {}

	getCPUText(cpu: CpuEnum) {
		switch (cpu) {
			case CpuEnum.NORMAL:
				return 'normal'
			case CpuEnum.MEDIUM:
				return 'medium'
			case CpuEnum.HIGH:
				return 'high'
			default:
				return 'NA'
		}
	}
}
