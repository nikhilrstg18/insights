import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { Endpoint } from './../../../shared/models/endpoint'
import { PcdUsageCard } from './../../../shared/models/pcd-usage-card'
import { DashboardService } from './../../../shared/services/dashboard.service'

@Component({
	selector: 'i-pc-detail',
	templateUrl: './pc-detail.component.html',
	styleUrls: ['./pc-detail.component.scss'],
})
export class PcDetailComponent implements OnInit {
	public serviceTag: string = ''
	public endpoint!: Endpoint
	public loading: boolean = false
	public usageCards: PcdUsageCard[] = []

	constructor(
		private actRoute: ActivatedRoute,
		private dashboardService: DashboardService
	) {}

	ngOnInit(): void {
		this.serviceTag = this.actRoute.snapshot.params.serviceTag
		this.loading = true
		this.dashboardService.get(this.serviceTag).subscribe(endpoint => {
			this.endpoint = endpoint
			this.usageCards = this.getPcdUsageCards(endpoint)
			this.loading = false
		})
	}

	getPcdUsageCards(endpoint: Endpoint): PcdUsageCard[] {
		const {
			ram,
			ramUtil,
			ramUtilMax,
			gpuUtil,
			gpuUtilMax,
			storageRemaining,
			cpuUtil,
			osFailures,
			appFailures,
		} = endpoint
		let healthScore = 0

		return [
			new PcdUsageCard(
				MetricNameEnum.HEALTH_SCORE,
				'target',
				"The Utilization Score indicates how heavily a system's critical hardware is being used. A score from 0 to 100 is produced by continually measuring the performance of all major components. Higher scores indicate system resources are under heavier loads during daily operation, and may be affecting end-user experience.",
				healthScore,
				'',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.RAM,
				'memory',
				'The amount of memory (RAM) installed on the device. Low memory, or consistently high % utilization, can significantly reduce device performance.',
				ram,
				'GB',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.RAM_UTIL,
				'resistor',
				'Average % of memory in use over the selected period.',
				ramUtil,
				'avg',
				ramUtilMax,
				'max'
			),
			new PcdUsageCard(
				MetricNameEnum.STORAGE_REMAINING,
				'hard-disk',
				'The % of this hard drive still available for file storage, and the average hard drive activity over the selected time period.',
				storageRemaining,
				'free',
				0.85,
				'disk'
			),
			new PcdUsageCard(
				MetricNameEnum.CPU_UTIL,
				'cpu',
				"The average load on this device's CPU over the selected time period. 'Normal' indicates low load; 'medium' indicates increased average load. 'High' means the device's performance is likely negatively affected.",
				cpuUtil,
				'',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.GPU,
				'storage-adapter',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				gpuUtil,
				'avg',
				gpuUtilMax,
				'max'
			),
			new PcdUsageCard(
				MetricNameEnum.OS_FAILURES,
				'computer',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				osFailures,
				'',
				0,
				''
			),
			new PcdUsageCard(
				MetricNameEnum.APP_FAILURES,
				'application',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				appFailures,
				'',
				0,
				''
			),
		]
	}
}
