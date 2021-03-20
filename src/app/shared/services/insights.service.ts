import { Injectable } from '@angular/core'
import { Dashboard } from 'src/app/dashboard/models/dashboard'
import { CpuEnum } from '../enums/cpu.enum'
import { MetricNameEnum } from '../enums/metric-name.enum'
import { Endpoint } from '../models/endpoint'
import { FilterCard } from '../models/filter-card'
import { Filters } from '../models/filters'
import { PcdUsageCard } from '../models/pcd-usage-card'
import { DBWidget } from '../../dashboard/models/db-widget'
import { MetricEnum } from '../enums/metric.enum'
import { SeverityEnum } from '../enums/severity.enum'

@Injectable({
	providedIn: 'root',
})
export class InsightsService {
	getDefaultCardDataList(filters: Filters) {
		return [
			new FilterCard(
				MetricEnum.OS_FAILURES,
				MetricNameEnum.OS_FAILURES,
				'>=',
				filters.osFailures.active,
				filters.osFailures.active ? filters.osFailures.value : 10,
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
				filters.appFailures.active,
				filters.appFailures.active ? filters.appFailures.value : 15,
				15,
				0,
				30,
				'PCs with',
				'App failures',
				'',
				['0', '15', '30']
			),
			new FilterCard(
				MetricEnum.AGE,
				MetricNameEnum.AGE,
				'>=',
				filters.age.active,
				filters.age.active ? filters.age.value : 24,
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
				filters.cpuUtil.active,
				filters.cpuUtil.active ? filters.cpuUtil.value : CpuEnum.MEDIUM,
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
				filters.ramUtil.active,
				filters.ramUtil.active ? filters.ramUtil.value : 50,
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
				filters.ram.active,
				filters.ram.active ? filters.ram.value : 32,
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
				filters.storageRemaining.active,
				filters.storageRemaining.active ? filters.storageRemaining.value : 50,
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
				filters.batteryHealth.active,
				filters.batteryHealth.active ? filters.batteryHealth.value : 50,
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
				filters.batteryRuntime.active,
				filters.batteryRuntime.active ? filters.batteryRuntime.value : 6,
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
			case MetricNameEnum.GPU_UTIL:
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
			case MetricNameEnum.STORAGE_REMAINING:
				switch (true) {
					case metric < 0.3:
						color = 'danger'
						break
					case metric > 0.3 && metric < 0.6:
						color = 'warning'
						break
					case metric >= 0.6:
						color = 'success'
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
			(ram / 64 +
				ramUtil / ramUtilMax +
				gpuUtil / gpuUtil +
				(1 - storageRemaining / 0.85) +
				cpuUtil / 3) /
			5

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
				this.getUsageSeverity(MetricNameEnum.UTIL_SCORE, healthScore),
				'This PC should be operating normally.',
				'This PC may have limited performance.',
				'This PC is not performing optimally.'
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
				this.getUsageSeverity(MetricNameEnum.RAM, ram, 16, true),
				'This PC should be performing lag free.',
				'This PC may have lag in performance.',
				'This PC may have frequent lag in performance.'
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
				this.getUsageSeverity(MetricNameEnum.RAM_UTIL, ramUtil, ramUtilMax),
				'This PC has optimal RAM usage',
				'This PC has medium RAM usage',
				'This PC has high RAM usage'
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
				this.getUsageSeverity(
					MetricNameEnum.STORAGE_REMAINING,
					storageRemaining,
					0.85
				),
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
				this.getUsageSeverity(MetricNameEnum.CPU_UTIL, cpuUtil, 3),
				'This PC has optimal load on CPU',
				'This PC has medium load on CPU',
				'This PC has peek load on CPU'
			),
			new PcdUsageCard(
				MetricNameEnum.GPU_UTIL,
				'storage-adapter',
				'The average % of video memory (VRAM) used over the selected time period, and the peak load on the GPU.  Consistently high average GPU utilization may reduce device performance.',
				'right',
				gpuUtil,
				'avg',
				gpuUtilMax,
				'max',
				this.getSeverityColor(MetricNameEnum.GPU_UTIL, gpuUtil),
				this.getUsageSeverity(MetricNameEnum.GPU_UTIL, gpuUtil, gpuUtilMax),
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
				this.getUsageSeverity(MetricNameEnum.OS_FAILURES, osFailures, 20),
				'This PC is performing well.',
				'This PC stops responding frequently.',
				'This PC has frequent issues.'
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
				this.getUsageSeverity(MetricNameEnum.APP_FAILURES, appFailures, 30),
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
					background: `rgba(97,183,21,${value / 20} )`,
					color: `white`, // for light theme => 1 - value / 20 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.APP_FAILURES:
				return {
					background: `rgba(97,183,21,${value / 30} )`,
					color: `white`, // for light theme => 1 - value / 30 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.AGE:
				return {
					background: `rgba(97,183,21,${value / 48} )`,
					color: `white`, // for light theme => 1 - value / 48 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.CPU_UTIL:
				return {
					background: `rgba(97,183,21,${value / 3} )`,
					color: `white`, // for light theme => 1 - value / 3 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.RAM_UTIL:
				return {
					background: `rgba(97,183,21,${value} )`,
					color: `white`, // for light theme => 1 - value > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.STORAGE_REMAINING:
			case MetricNameEnum.BATTERY_HEALTH:
			case MetricNameEnum.CSAT:
				return {
					background: `rgba(97,183,21,${1 - value} )`,
					color: `white`, // for light theme => value > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.RAM:
				return {
					background: `rgba(97,183,21,${1 - value / 64} )`,
					color: `white`, // for light theme => value / 64 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
			case MetricNameEnum.BATTERY_RUNTIME:
				return {
					background: `rgba(97,183,21,${1 - value / 12} )`,
					color: `white`, // for light theme => value / 12 > 0.5 ? `rgba(51, 51, 51,1)` : `white`,
				}
		}

		return {
			background: `rgba(97,183,21,0} )`,
			color: `white`, // for light theme => `rgba(51, 51, 51,1} )`,
		}
	}

	public getWidgetData(dashboard: Dashboard) {
		return {
			systemIssues: {
				[MetricEnum.OS_FAILURES]: new DBWidget(
					MetricEnum.OS_FAILURES,
					MetricNameEnum.OS_FAILURES,
					'computer',
					'PCs with >= {0} OS failures',
					10,
					dashboard.osFailures.count,
					dashboard.osFailures.avg
				),
				[MetricEnum.APP_FAILURES]: new DBWidget(
					MetricEnum.APP_FAILURES,
					MetricNameEnum.APP_FAILURES,
					'application',
					'PCs with >= {0} app failures',
					10,
					dashboard.appFailures.count,
					dashboard.appFailures.avg
				),
				[MetricEnum.AGE]: new DBWidget(
					MetricEnum.AGE,
					MetricNameEnum.AGE,
					'hourglass',
					'PCs shipped {0} months ago',
					12,
					dashboard.age.count,
					dashboard.age.avg
				),
			},
			deviceIssues: {
				[MetricEnum.CPU_UTIL]: new DBWidget(
					MetricEnum.CPU_UTIL,
					MetricNameEnum.CPU_UTIL,
					'cpu',
					'PCs with {0} CPU usage',
					3,
					dashboard.cpuUtil.count,
					dashboard.cpuUtil.avg
				),
				[MetricEnum.RAM_UTIL]: new DBWidget(
					MetricEnum.RAM_UTIL,
					MetricNameEnum.RAM_UTIL,
					'resistor',
					'PCs with >= {0}% RAM usage',
					30,
					dashboard.ramUtil.count,
					dashboard.ramUtil.avg
				),
				[MetricEnum.RAM]: new DBWidget(
					MetricEnum.RAM,
					MetricNameEnum.RAM,
					'memory',
					'PCs with <= {0}GB installed memory',
					8,
					dashboard.ram.count,
					dashboard.ram.avg
				),
				[MetricEnum.STORAGE_REMAINING]: new DBWidget(
					MetricEnum.STORAGE_REMAINING,
					MetricNameEnum.STORAGE_REMAINING,
					'hard-disk',
					'PCs with <= {0}% storage available',
					30,
					dashboard.storageRemaining.count,
					dashboard.storageRemaining.avg
				),
				[MetricEnum.BATTERY_HEALTH]: new DBWidget(
					MetricEnum.BATTERY_HEALTH,
					MetricNameEnum.BATTERY_HEALTH,
					'battery',
					'PCs with <= {0}% battery health',
					30,
					dashboard.batteryHealth.count,
					dashboard.batteryHealth.avg
				),
				[MetricEnum.BATTERY_RUNTIME]: new DBWidget(
					MetricEnum.BATTERY_RUNTIME,
					MetricNameEnum.BATTERY_RUNTIME,
					'bolt',
					'PCs with <= {0}hr battery life',
					2,
					dashboard.batteryHealth.count,
					dashboard.batteryHealth.avg
				),
			},
		}
	}

	public getUsageSeverity(
		metricId: MetricNameEnum,
		metricAvg: number,
		factor: number = 1,
		isInverted: boolean = false
	): SeverityEnum {
		switch (metricId) {
			case MetricNameEnum.RAM:
				switch (true) {
					case metricAvg < 8:
						return SeverityEnum.CRITICAL
					case metricAvg >= 8 && metricAvg < 16:
						return SeverityEnum.WARNING
					case metricAvg >= 16:
						return SeverityEnum.GOOD
				}
				break
			case MetricNameEnum.CPU_UTIL:
				switch (metricAvg) {
					case CpuEnum.NORMAL:
						return SeverityEnum.GOOD
					case CpuEnum.MEDIUM:
						return SeverityEnum.WARNING
					case CpuEnum.HIGH:
						return SeverityEnum.CRITICAL
				}
				break
			case MetricNameEnum.RAM_UTIL:
			case MetricNameEnum.GPU_UTIL:
				switch (true) {
					case metricAvg < 0.3:
						return SeverityEnum.GOOD
					case metricAvg > 0.3 && metricAvg < 0.6:
						return SeverityEnum.WARNING
					case metricAvg >= 0.6:
						return SeverityEnum.CRITICAL
				}
				break
			case MetricNameEnum.STORAGE_REMAINING:
				switch (true) {
					case metricAvg < 0.3:
						return SeverityEnum.CRITICAL
					case metricAvg > 0.3 && metricAvg < 0.6:
						return SeverityEnum.WARNING
					case metricAvg >= 0.6:
						return SeverityEnum.GOOD
				}
				break
			case MetricNameEnum.UTIL_SCORE:
				switch (true) {
					case metricAvg < 0.4:
						return SeverityEnum.GOOD
					case metricAvg >= 0.4 && metricAvg < 0.6:
						return SeverityEnum.WARNING
					case metricAvg >= 0.6:
						return SeverityEnum.CRITICAL
				}
				break
			case MetricNameEnum.APP_FAILURES:
				switch (true) {
					case metricAvg < 10:
						return SeverityEnum.GOOD
					case metricAvg >= 10 && metricAvg < 20:
						return SeverityEnum.WARNING
					case metricAvg >= 20:
						return SeverityEnum.CRITICAL
				}
				break
			case MetricNameEnum.OS_FAILURES:
				switch (true) {
					case metricAvg < 4:
						return SeverityEnum.GOOD
					case metricAvg >= 4 && metricAvg < 8:
						return SeverityEnum.WARNING
					case metricAvg >= 8:
						return SeverityEnum.CRITICAL
				}
				break

			default:
				break
		}

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
