import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Filters } from 'src/app/shared/models/filters'
import { PcsGridComponent } from '../pcs-grid/pcs-grid.component'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { FilterCard } from './../../../shared/models/filter-card'
import { HelperService } from './../../../shared/services/helper.service'

@Component({
	selector: 'i-pcs-filters',
	templateUrl: './pcs-filters.component.html',
	styleUrls: ['./pcs-filters.component.scss'],
})
export class PcsFiltersComponent implements OnInit {
	public expanded: boolean = true
	public filterCards: FilterCard[] = []
	public metricNameEnum = MetricNameEnum
	@Input() public filters: Filters = new Filters()
	@Input() public total: number = 0
	@Input() public loading: boolean = false
	@Output() public onUpdateClick = new EventEmitter()
	constructor(private helperService: HelperService) {}

	ngOnInit(): void {
		this.filterCards = this.helperService.getDefaultCardDataList(this.filters)
	}

	handleUpdatedFilter(filter: { id: string; value: string }) {
		this.filters[filter.id].value = Number(filter.value)
	}

	handleUpdate() {
		this.onUpdateClick.emit()
	}
}
