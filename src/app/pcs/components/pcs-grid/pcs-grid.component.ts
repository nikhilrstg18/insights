import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core'
import { ClrDatagrid, ClrDatagridStateInterface } from '@clr/angular'
import { Filters } from 'src/app/shared/models/filters'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { Endpoint } from './../../../shared/models/endpoint'
import { HelperService } from './../../../shared/services/helper.service'
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
	@Input() public filters: Filters = new Filters()
	@Output() public totalUpdated = new EventEmitter<number>()
	@Output('loading') public isLoading = new EventEmitter<boolean>()
	public endpoints: Endpoint[] = []
	public total: number = 0
	public loading: boolean = true
	public page: number = 1
	public firstLoad: boolean = true
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
		this.isLoading.emit(this.loading)
		let clrDgFilters: { [prop: string]: any[] } = {}

		// if filters create filters object
		if (state?.filters) {
			for (let filter of state.filters) {
				let { property, value } = <{ property: string; value: string }>filter
				clrDgFilters[property] = [value]
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

		this.inventory.reset().subscribe((endpoints: Endpoint[]) => {
			this.inventory.all = endpoints
			this.inventory.size = this.inventory.all.length
			this.inventory
				.filter(clrDgFilters, this.filters)
				.sort(<{ by: string; reverse: boolean }>state.sort)
				.fetch(state?.page?.from, state?.page?.size)
				.subscribe((result: FetchResult) => {
					this.endpoints = result.endpoints
					this.total = result.length
					this.loading = false
					this.totalUpdated.emit(this.total)
					this.isLoading.emit(this.loading)
				})
		})
	}
}
