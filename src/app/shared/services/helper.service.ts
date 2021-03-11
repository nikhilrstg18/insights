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
			case MetricNameEnum.HEALTH_SCORE:
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
					case metric < 20:
						color = 'success'
						break
					case metric > 20 && metric < 75:
						color = 'warning'
						break
					case metric >= 75:
						color = 'danger'
						break
					default:
						color = ''
						break
				}
				break
			case MetricNameEnum.OS_FAILURES:
				switch (true) {
					case metric < 5:
						color = 'success'
						break
					case metric > 5 && metric < 10:
						color = 'warning'
						break
					case metric >= 10:
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
			(ram / 64 +
				ramUtil +
				gpuUtil +
				storageRemaining +
				cpuUtil / 3 +
				osFailures / 20 +
				appFailures / 100) /
			7

		return [
			new PcdUsageCard(
				MetricNameEnum.HEALTH_SCORE,
				'target',
				"The Utilization Score indicates how heavily a system's critical hardware is being used. A score from 0 to 100 is produced by continually measuring the performance of all major components. Higher scores indicate system resources are under heavier loads during daily operation, and may be affecting end-user experience.",
				'right',
				healthScore,
				'',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.HEALTH_SCORE, healthScore)
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
				this.getSeverityColor(MetricNameEnum.RAM, ram)
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
				this.getSeverityColor(MetricNameEnum.RAM_UTIL, ramUtil)
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
				)
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
				this.getSeverityColor(MetricNameEnum.CPU_UTIL, cpuUtil)
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
				this.getSeverityColor(MetricNameEnum.GPU_UTILL, cpuUtil)
			),
			new PcdUsageCard(
				MetricNameEnum.OS_FAILURES,
				'computer',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				'left',
				osFailures,
				'',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.OS_FAILURES, osFailures)
			),
			new PcdUsageCard(
				MetricNameEnum.APP_FAILURES,
				'application',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				'left',
				appFailures,
				'',
				0,
				'',
				this.getSeverityColor(MetricNameEnum.HEALTH_SCORE, appFailures)
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
					background: `rgba(0, 114, 163,${value / 100} )`,
					color: 1 - value / 100 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
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
}
