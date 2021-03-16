import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Endpoint } from '../models/endpoint'
import { MetricEnum } from './../enums/metric.enum'
import { Filters } from './../models/filters'
import { DashboardService } from './dashboard.service'

@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	public size: number = 0
	public latency: number = 0
	public all: Endpoint[] = []
	private _currentQuery: Endpoint[] = []

	constructor(private dashboardService: DashboardService) {}

	reset() {
		return this.dashboardService.getAll()
	}

	filter(
		clrDGFilters: { [key: string]: string[] },
		filters: Filters = new Filters()
	): InventoryService {
		this._checkCurrentQuery()
		if (clrDGFilters) {
			for (const key in clrDGFilters) {
				if (clrDGFilters[key].length === 0) {
					continue
				}
				const getFilterProperty = (endpoint: Endpoint) => '' + endpoint[key]
				const lowerCase = clrDGFilters[key].map(value => value.toLowerCase())
				this._currentQuery = this._currentQuery.filter(query => {
					for (const value of lowerCase) {
						if (getFilterProperty(query).toLowerCase().indexOf(value) >= 0) {
							return true
						}
					}
					return false
				})
			}
		}
		const query = this.buildQuery(filters)
		this._currentQuery = this.filterEndpointsByQuery(this._currentQuery, query)
		return this
	}

	buildQuery(filters: Filters) {
		let query: { [key: string]: { value: number; operator: string } } = {}
		const getValue = (filterProperty: string, filters: Filters) =>
			[
				'' + MetricEnum.RAM_UTIL,
				'' + MetricEnum.STORAGE_REMAINING,
				'' + MetricEnum.BATTERY_HEALTH,
			].includes(filterProperty)
				? filters[filterProperty].value / 100
				: filters[filterProperty].value

		for (const filterProperty of Object.keys(filters)) {
			if (filters[filterProperty].active) {
				query[filterProperty] = {
					value: getValue(filterProperty, filters),
					operator: filters[filterProperty].operator,
				}
			}
		}
		return query
	}

	filterEndpointsByQuery(
		endpoints: Endpoint[],
		query: { [key: string]: { value: number; operator: string } }
	) {
		const filteredEndpoints = endpoints.filter(endpoint => {
			for (let key in query) {
				switch (query[key].operator) {
					case '>=':
						return endpoint[key] >= query[key].value
					case '<=':
						return endpoint[key] <= query[key].value
					default:
						return endpoint[key] == query[key].value
				}
			}
			return false
		})
		return filteredEndpoints
	}

	sort(sort: { by: string; reverse: boolean }): InventoryService {
		this._checkCurrentQuery()
		if (sort && sort.by) {
			let getSortProperty = (endpoint: Endpoint) => endpoint[sort.by]
			this._currentQuery.sort((a, b) => {
				let comp = 0
				const propA = getSortProperty(a),
					propB = getSortProperty(b)
				if (propA < propB) {
					comp = -1
				} else if (propA > propB) {
					comp = 1
				}
				if (sort.reverse) {
					comp = -comp
				}
				return comp
			})
		}
		return this
	}

	fetch(
		skip: number = 0,
		limit: number = this._currentQuery.length
	): Observable<FetchResult> {
		// Stringify and parse to mimic new object creation like a real HTTP request
		const items = JSON.stringify(this._currentQuery.slice(skip, skip + limit))
		const result: FetchResult = {
			endpoints: JSON.parse(items),
			length: this._currentQuery.length,
		}
		this._currentQuery = []
		return of(result)
	}

	private _checkCurrentQuery() {
		if (!this._currentQuery.length) {
			this._currentQuery = this.all.slice()
		}
	}
}

export interface FetchResult {
	endpoints: Endpoint[]
	length: number
}
