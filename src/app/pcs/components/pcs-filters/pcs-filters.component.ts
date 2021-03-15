import { HelperService } from './../../../shared/services/helper.service'
import { AfterContentInit, Component, Input, OnInit } from '@angular/core'
import { Params } from '@angular/router'
import { CpuEnum } from 'src/app/shared/enums/cpu.enum'
import { MetricEnum } from 'src/app/shared/enums/metric.enum'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { FilterCard } from './../../../shared/models/filter-card'

@Component({
	selector: 'i-pcs-filters',
	templateUrl: './pcs-filters.component.html',
	styleUrls: ['./pcs-filters.component.scss'],
})
export class PcsFiltersComponent implements OnInit {
	public expanded: boolean = true
	public filterCards: FilterCard[] = []
	public metricNameEnum = MetricNameEnum
	@Input() public queryParams: Params = {}
	constructor(private helperService: HelperService) {}

	ngOnInit(): void {
		this.filterCards = this.helperService.getDefaultCardDataList(
			this.queryParams
		)
	}
}
