import { DBWidget } from './../../dashboard/models/db-widget'
import { MetricEnum } from './../enums/metric.enum'
import { SeverityEnum } from './../enums/severity.enum'
import { Injectable } from '@angular/core'
import { CpuEnum } from '../enums/cpu.enum'
import { MetricNameEnum } from '../enums/metric-name.enum'
import { Endpoint } from '../models/endpoint'
import { PcdUsageCard } from '../models/pcd-usage-card'

@Injectable({
	providedIn: 'root',
})
export class HelperService {
	public getSeverityColor(
		title: string,
		metric: number,
		metricMax: number = 0
	): string {
		let color = ''
		switch (title) {
			case MetricNameEnum.RAM:
				switch (true) {
					case metric < 8:
						color = 'danger'
						break
					case metric >= 8 && metric < 16:
						color = 'warning'
						break
					case metric >= 16:
						color = 'success'
						break
					default:
						color = ''
						break
				}
				break
			case MetricNameEnum.CPU_UTIL:
				switch (metric) {
					case CpuEnum.NORMAL:
						color = 'success'
						break
					case CpuEnum.MEDIUM:
						color = 'warning'
						break
					case CpuEnum.HIGH:
						color = 'danger'
						break
					default:
						color = ''
						break
				}
				break
			case MetricNameEnum.RAM_UTIL:
			case MetricNameEnum.STORAGE_REMAINING:
			case MetricNameEnum.GPU_UTILL:
				switch (true) {
					case metric < 0.3:
						color = 'success'
						break
					case metric > 0.3 && metric < 0.6:
						color = 'warning'
						break
					case metric >= 0.6:
						color = 'danger'
						break
					default:
						color = ''
						break
				}
				break
			case MetricNameEnum.UTIL_SCORE:
				switch (true) {
					case metric < 0.4:
						color = 'success'
						break
					case metric >= 0.4 && metric < 0.6:
						color = 'warning'
						break
					case metric >= 0.6:
						color = 'danger'
						break
					default:
						color = ''
						break
				}
				break
			case MetricNameEnum.APP_FAILURES:
				switch (true) {
					case metric < 10:
						color = 'success'
						break
					case metric >= 10 && metric < 20:
						color = 'warning'
						break
					case metric >= 20:
						color = 'danger'
						break
					default:
						color = ''
						break
				}
				break
			case MetricNameEnum.OS_FAILURES:
				switch (true) {
					case metric < 4:
						color = 'success'
						break
					case metric >= 4 && metric < 8:
						color = 'warning'
						break
					case metric >= 8:
						color = 'danger'
						break
					default:
						color = ''
						break
				}
				break

			default:
				break
		}

		return color
	}

	public getCPUText(cpu: CpuEnum): string {
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

	public getPcdUsageCards(endpoint: Endpoint): PcdUsageCard[] {
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

		let healthScore =
			(ram / 64 + ramUtil + gpuUtil + storageRemaining + cpuUtil / 3) / 7

		return [
			new PcdUsageCard(
				MetricNameEnum.UTIL_SCORE,
				'target',
				"The Usage Score indicates how heavily a system's critical hardware is being used. A score from 0 to 100 is produced by continually measuring the performance of all major components. Higher scores indicate system resources are under heavier loads during daily operation, and may be affecting end-user experience.",
				'right',
				healthScore,
				'',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.UTIL_SCORE, healthScore),
				this.getUsageSeverity(healthScore),
				'This PC should be operating normally',
				'This PC may have limited performance',
				'This PC is not performing optimally. Review your configurations'
			),
			new PcdUsageCard(
				MetricNameEnum.RAM,
				'memory',
				'The amount of memory (RAM) installed on the device. Low memory, or consistently high % utilization, can significantly reduce device performance.',
				'right',
				ram,
				'GB',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.RAM, ram),
				this.getUsageSeverity(ram, 16, true),
				'This PC should be operating normally',
				'This PC may have limited performance',
				'This PC is not performing optimally. Review your configurations'
			),
			new PcdUsageCard(
				MetricNameEnum.RAM_UTIL,
				'resistor',
				'Average % of memory in use over the selected period.',
				'right',
				ramUtil,
				'avg',
				ramUtilMax,
				'max',
				this.getSeverityColor(MetricNameEnum.RAM_UTIL, ramUtil),
				this.getUsageSeverity(ramUtil, ramUtilMax),
				'This PC has optimal ram usage',
				'This PC has medium ram usage',
				'This PC has high ram usage'
			),
			new PcdUsageCard(
				MetricNameEnum.STORAGE_REMAINING,
				'hard-disk',
				'The % of this hard drive still available for file storage, and the average hard drive activity over the selected time period.',
				'right',
				storageRemaining,
				'free',
				0.85,
				'disk',
				this.getSeverityColor(
					MetricNameEnum.STORAGE_REMAINING,
					storageRemaining
				),
				this.getUsageSeverity(storageRemaining, 0.85),
				'This PC has optimal free storage available',
				'This PC has low free storage available',
				'This PC has limited free storage available'
			),
			new PcdUsageCard(
				MetricNameEnum.CPU_UTIL,
				'cpu',
				"The average load on this device's CPU over the selected time period. 'Normal' indicates low load; 'medium' indicates increased average load. 'High' means the device's performance is likely negatively affected.",
				'right',
				cpuUtil,
				'',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.CPU_UTIL, cpuUtil),
				this.getUsageSeverity(cpuUtil, 3),
				'This PC has optimal load on CPU',
				'This PC has medium load on CPU',
				'This PC has peek load on CPU'
			),
			new PcdUsageCard(
				MetricNameEnum.GPU_UTILL,
				'storage-adapter',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				'right',
				gpuUtil,
				'avg',
				gpuUtilMax,
				'max',
				this.getSeverityColor(MetricNameEnum.GPU_UTILL, gpuUtil),
				this.getUsageSeverity(gpuUtil, gpuUtilMax, true),
				'This PC has optimal load on GPU',
				'This PC has medium load on GPU',
				'This PC has peek load on GPU'
			),
			new PcdUsageCard(
				MetricNameEnum.OS_FAILURES,
				'computer',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				'left',
				osFailures,
				'os crashes',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.OS_FAILURES, osFailures),
				this.getUsageSeverity(osFailures, 20),
				'This PC is performing well.',
				'This PC is not performing well and stops responding frequently.',
				'This PC is not performing consistently and has frequent issues.'
			),
			new PcdUsageCard(
				MetricNameEnum.APP_FAILURES,
				'application',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				'left',
				appFailures,
				'app crashes',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.APP_FAILURES, appFailures),
				this.getUsageSeverity(appFailures, 30),
				'Installed apps are performing well.',
				'One or more apps are not performing well.',
				'One or more apps are failing frequently.'
			),
		]
	}

	public getHeatMapColor(name: MetricNameEnum, value: number) {
		switch (name) {
			case MetricNameEnum.OS_FAILURES:
				return {
					background: `rgba(0, 114, 163,${value / 20} )`,
					color: 1 - value / 20 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.APP_FAILURES:
				return {
					background: `rgba(0, 114, 163,${value / 30} )`,
					color: 1 - value / 30 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.AGE:
				return {
					background: `rgba(0, 114, 163,${value / 48} )`,
					color: 1 - value / 48 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.CPU_UTIL:
				return {
					background: `rgba(0, 114, 163,${value / 3} )`,
					color: 1 - value / 3 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.RAM_UTIL:
				return {
					background: `rgba(0, 114, 163,${value} )`,
					color: 1 - value > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.STORAGE_REMAINING:
			case MetricNameEnum.BATTERY_HEALTH:
			case MetricNameEnum.CSAT:
				return {
					background: `rgba(0, 114, 163,${1 - value} )`,
					color: value > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.RAM:
				return {
					background: `rgba(0, 114, 163,${1 - value / 64} )`,
					color: value / 64 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.BATTERY_RUNTIME:
				return {
					background: `rgba(0, 114, 163,${1 - value / 12} )`,
					color: value / 12 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
		}

		return {
			background: `rgba(0, 114, 163,0} )`,
			color: `rgba(51, 51, 51,1} )`,
		}
	}

	public getWidgetData() {
		return {
			systemIssues: {
				[MetricEnum.OS_FAILURES]: new DBWidget(
					MetricNameEnum.OS_FAILURES,
					'computer',
					'PCs with >= {0} OS failures',
					4,
					24,
					0.19
				),
				[MetricEnum.APP_FAILURES]: new DBWidget(
					MetricNameEnum.APP_FAILURES,
					'application',
					'PCs with <= {0} app failures',
					12,
					24,
					0.19
				),
				[MetricEnum.AGE]: new DBWidget(
					MetricNameEnum.AGE,
					'hourglass',
					'PCs shipped {0} months ago',
					12,
					24,
					0.19
				),
			},
			deviceIssues: {
				[MetricEnum.CPU_UTIL]: new DBWidget(
					MetricNameEnum.CPU_UTIL,
					'cpu',
					'PCs with {0} CPU usage',
					0,
					16,
					0.12
				),
				[MetricEnum.RAM_UTIL]: new DBWidget(
					MetricNameEnum.RAM_UTIL,
					'resistor',
					'PCs with >= {0}% ram usage',
					25,
					24,
					0.19
				),
				[MetricEnum.RAM]: new DBWidget(
					MetricNameEnum.RAM,
					'memory',
					'PCs with <= {0}GB installed memory',
					20,
					16,
					0.12
				),
				[MetricEnum.STORAGE_REMAINING]: new DBWidget(
					MetricNameEnum.STORAGE_REMAINING,
					'hard-disk',
					'PCs with <= {0}% storage space available',
					20,
					24,
					0.19
				),
				[MetricEnum.BATTERY_HEALTH]: new DBWidget(
					MetricNameEnum.BATTERY_HEALTH,
					'battery',
					'PCs with <= {0}% battery life',
					20,
					24,
					0.19
				),
				[MetricEnum.BATTERY_RUNTIME]: new DBWidget(
					MetricNameEnum.BATTERY_RUNTIME,
					'bolt',
					'PCs with <= {0}hr battery runtime',
					20,
					24,
					0.19
				),
			},
		}
	}

	public getUsageSeverity(
		metricAvg: number,
		factor: number = 1,
		isInverted: boolean = false
	): SeverityEnum {
		const calculatedMetric = metricAvg / factor
		if (!isInverted) {
			switch (true) {
				case calculatedMetric < 0.5:
					return SeverityEnum.GOOD
				case calculatedMetric >= 0.5 && calculatedMetric < 0.75:
					return SeverityEnum.WARNING
				default:
					return SeverityEnum.CRITICAL
			}
		} else {
			switch (true) {
				case calculatedMetric >= 0.5:
					return SeverityEnum.GOOD
				case calculatedMetric < 0.5 && calculatedMetric <= 0.25:
					return SeverityEnum.WARNING
				default:
					return SeverityEnum.CRITICAL
			}
		}
	}
}
