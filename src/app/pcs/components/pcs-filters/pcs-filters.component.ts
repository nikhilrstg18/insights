import { Component, Input, OnInit } from '@angular/core'
import { Filters } from 'src/app/shared/models/filters'
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
	constructor(private helperService: HelperService) {}

	ngOnInit(): void {
		this.filterCards = this.helperService.getDefaultCardDataList(this.filters)
	}
}
