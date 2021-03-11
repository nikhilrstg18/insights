import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Endpoint } from '../models/endpoint'
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

	filter(filters: { [key: string]: string[] }): InventoryService {
		this._checkCurrentQuery()
		if (filters) {
			for (const key in filters) {
				if (filters[key].length === 0) {
					continue
				}

				let getFilterProperty = (endpoint: Endpoint) => '' + endpoint[key]
				// if (key === "pokemon") {
				//   getFilterProperty = (user: IEndpoint) => user.pokemon.name;
				// }

				const lowerCase = filters[key].map(value => value.toLowerCase())
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
		return this
	}

	sort(sort: { by: string; reverse: boolean }): InventoryService {
		this._checkCurrentQuery()
		if (sort && sort.by) {
			let getSortProperty = (endpoint: Endpoint) => endpoint[sort.by]
			//   if (sort.by === "pokemon") {
			//     getSortProperty = (user: IEndpoint) => user.pokemon.number;
			//   }

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
