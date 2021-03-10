import { CpuEnum } from './../../../shared/enums/cpu.enum'
import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { PcdUsageCard } from './../../../shared/models/pcd-usage-card'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'i-pc-detail',
	templateUrl: './pc-detail.component.html',
	styleUrls: ['./pc-detail.component.scss'],
})
export class PcDetailComponent implements OnInit {
	public serviceTag: string = ''

	public usageCards: PcdUsageCard[] = this.getPcdUsageCards()

	constructor(private actRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.serviceTag = this.actRoute.snapshot.params.serviceTag
	}

	getPcdUsageCards(): PcdUsageCard[] {
		return [
			new PcdUsageCard(
				MetricNameEnum.HEALTH_SCORE,
				'target',
				"The Utilization Score indicates how heavily a system's critical hardware is being used. A score from 0 to 100 is produced by continually measuring the performance of all major components. Higher scores indicate system resources are under heavier loads during daily operation, and may be affecting end-user experience.",
				0.5,
				'',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.RAM,
				'memory',
				'The amount of memory (RAM) installed on the device. Low memory, or consistently high % utilization, can significantly reduce device performance.',
				4,
				'GB',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.RAM_UTIL,
				'resistor',
				'Average % of memory in use over the selected period.',
				0.4,
				'avg',
				0.8,
				'max'
			),
			new PcdUsageCard(
				MetricNameEnum.STORAGE_REMAINING,
				'hard-disk',
				'The % of this hard drive still available for file storage, and the average hard drive activity over the selected time period.',
				0.4,
				'free',
				0.8,
				'disk'
			),
			new PcdUsageCard(
				MetricNameEnum.CPU_UTIL,
				'cpu',
				"The average load on this device's CPU over the selected time period. 'Normal' indicates low load; 'medium' indicates increased average load. 'High' means the device's performance is likely negatively affected.",
				CpuEnum.HIGH,
				'',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.GPU,
				'storage-adapter',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				0.6,
				'avg',
				0.85,
				'max'
			),
			new PcdUsageCard(
				MetricNameEnum.OS_FAILURES,
				'computer',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				4,
				'',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.APP_FAILURES,
				'application',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				20,
				'',
				0,
				''
			),
		]
	}
}
