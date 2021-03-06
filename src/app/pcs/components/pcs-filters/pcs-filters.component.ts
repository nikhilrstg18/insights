import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Filters } from 'src/app/shared/models/filters'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { FilterCard } from './../../../shared/models/filter-card'
import { InsightsService } from '../../../shared/services/insights.service'

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

	constructor(private helperService: InsightsService) {}

	ngOnInit(): void {
		this.filterCards = this.helperService.getDefaultCardDataList(this.filters)
	}

	handleUpdatedFilter(filter: { id: string; value: number }) {
		if (filter.value !== -1) {
			this.filters[filter.id].value = Number(filter.value)
		} else {
			this.filters[filter.id].value = Number(
				this.filterCards.find(f => f.id == filter.id)?.sliderValue
			)
		}
	}

	handleUpdate() {
		this.onUpdateClick.emit()
	}
}
