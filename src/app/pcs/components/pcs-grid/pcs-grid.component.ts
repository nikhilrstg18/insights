import { Component, Input, OnInit } from '@angular/core'
import { ClrDatagridStateInterface } from '@clr/angular'
import { IEndpoint } from './../../../dashboard/models/i-endpoint'
import { CpuEnum } from './../../../shared/enums/cpu.enum'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import {
	FetchResult,
	InventoryService,
} from './../../../shared/services/inventory.service'

@Component({
	selector: 'i-pcs-grid',
	templateUrl: './pcs-grid.component.html',
	styleUrls: ['./pcs-grid.component.scss'],
})
export class PcsGridComponent implements OnInit {
	@Input() showHeatMap: boolean = false
	public endpoints: IEndpoint[] = []
	public total: number = 0
	public loading: boolean = true
	public page: number = 1
	public firstLoad: boolean = false
	public selected: any[] = []
	public metricNameEnum = MetricNameEnum

	constructor(private inventory: InventoryService) {
		this.inventory.size = 100
		this.inventory.latency = 500
	}

	ngOnInit() {}

	//@ called from view by clr-datagrid
	refresh(state: ClrDatagridStateInterface) {
		this.loading = true
		let filters: { [prop: string]: any[] } = {}

		// if filters create filters object
		if (state?.filters) {
			for (let filter of state.filters) {
				let { property, value } = <{ property: string; value: string }>filter
				filters[property] = [value]
			}
		}

		if (state?.page) {
			if (state.page.from == -1) {
				state.page.from = 0
			}
			if (state.page.to == -1) {
				state.page.to = 9
			}
		}

		this.inventory.reset().subscribe((endpoints: IEndpoint[]) => {
			this.inventory.all = endpoints
			this.inventory
				.filter(filters)
				.sort(<{ by: string; reverse: boolean }>state.sort)
				.fetch(state?.page?.from, state?.page?.size)
				.subscribe((result: FetchResult) => {
					this.endpoints = result.endpoints
					this.total = result.length
					this.loading = false
				})
		})
	}
	getCPUText(cpu: CpuEnum) {
		switch (cpu) {
			case CpuEnum.NA:
				return 'NA'
			case CpuEnum.NORMAL:
				return 'normal'
			case CpuEnum.MEDIUM:
				return 'medium'
			case CpuEnum.HIGH:
				return 'high'
		}
	}

	getHeatMapColor(name: MetricNameEnum, value: number) {
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
