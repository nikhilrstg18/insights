import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { MetricEnum } from 'src/app/shared/enums/metric.enum'
import { FilterContext } from 'src/app/shared/models/filter-context'
import { Filters } from 'src/app/shared/models/filters'

@Component({
	selector: 'i-pcs',
	templateUrl: './pcs.component.html',
	styleUrls: ['./pcs.component.scss'],
})
export class PcsComponent implements OnInit {
	public showHeatMap: boolean = false
	public queryParams: Params = {}
	public filters: Filters = new Filters()
	constructor(private _activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.queryParams = this._activatedRoute.snapshot.queryParams
		this.setFilters(Object.keys(this.queryParams))
	}

	setFilters(filterNames: string[]) {
		for (const name of filterNames) {
			const value = this.queryParams[Object.keys(this.queryParams)[0]]
			switch (name) {
				case MetricEnum.OS_FAILURES:
					this.filters.osFailures = new FilterContext(value, !!value)
					break
				case MetricEnum.APP_FAILURES:
					this.filters.appFailures = new FilterContext(value, !!value)
					break
				case MetricEnum.AGE:
					this.filters.age = new FilterContext(value, !!value)
					break
				case MetricEnum.CPU_UTIL:
					this.filters.cpuUtil = new FilterContext(value, !!value)
					break
				case MetricEnum.RAM_UTIL:
					this.filters.ramUtil = new FilterContext(value, !!value)
					break
				case MetricEnum.RAM:
					this.filters.ram = new FilterContext(value, !!value)
					break
				case MetricEnum.STORAGE_REMAINING:
					this.filters.storageRemaining = new FilterContext(value, !!value)
					break
				case MetricEnum.BATTERY_HEALTH:
					this.filters.batteryHealth = new FilterContext(value, !!value)
					break
				case MetricEnum.BATTERY_RUNTIME:
					this.filters.batteryRuntime = new FilterContext(value, !!value)
					break
			}
		}
	}
}
