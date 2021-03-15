import { FilterContext } from './../../../shared/models/filter-context'
import { HelperService } from './../../../shared/services/helper.service'
import { Component, Input, OnInit } from '@angular/core'
import { ClrDatagridStateInterface } from '@clr/angular'
import { CpuEnum } from './../../../shared/enums/cpu.enum'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { Endpoint } from './../../../shared/models/endpoint'
import {
	FetchResult,
	InventoryService,
} from './../../../shared/services/inventory.service'
import { Filters } from 'src/app/shared/models/filters'

@Component({
	selector: 'i-pcs-grid',
	templateUrl: './pcs-grid.component.html',
	styleUrls: ['./pcs-grid.component.scss'],
})
export class PcsGridComponent implements OnInit {
	@Input() showHeatMap: boolean = false
	@Input() public filters: Filters = new Filters()
	public endpoints: Endpoint[] = []
	public total: number = 0
	public loading: boolean = true
	public page: number = 1
	public firstLoad: boolean = false
	public selected: any[] = []
	public metricNameEnum = MetricNameEnum

	constructor(
		private inventory: InventoryService,
		public helperService: HelperService
	) {}

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
		// for (let filter of Object.entries(this.filters)) {
		// 	let { value } = <FilterContext>filter[1]
		// 	filters[filter[0]] = [value]
		// }

		if (state?.page) {
			if (state.page.from == -1) {
				state.page.from = 0
			}
			if (state.page.to == -1) {
				state.page.to = 9
			}
		}

		this.inventory.reset().subscribe((endpoints: Endpoint[]) => {
			this.inventory.all = endpoints
			this.inventory.size = this.inventory.all.length
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
}
