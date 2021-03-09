import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Dashboard } from 'src/app/dashboard/models/dashboard'
import { IEndpoint } from './../../dashboard/models/i-endpoint'

@Injectable({
	providedIn: 'root',
})
export class DashboardService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<IEndpoint[]> {
		return this.http.get<IEndpoint[]>('/api/endpoints')
	}

	getDashboardWidgetData() {
		let systemCrashesSum: number = 0
		let appCrashesSum: number = 0
		let cpuUtilSum: number = 0
		let ramUtilSum: number = 0
		let ramSum: number = 0
		let batteryHealthSum: number = 0
		let batteryRuntimeSum: number = 0
		let storageRemainingSum: number = 0
		let csatSum: number = 0
		let ageSum: number = 0
		let total: number = 0

		this.getAll().subscribe((endpoints: IEndpoint[]) => {
			endpoints.forEach(e => {
				;(systemCrashesSum += e.systemCrashes),
					(appCrashesSum += e.appCrashes),
					(cpuUtilSum += e.cpuUtil),
					(ramUtilSum += e.ramUtil),
					(ramSum += e.ram),
					(batteryHealthSum += e.batteryHealth),
					(batteryRuntimeSum += e.batteryRuntime),
					(storageRemainingSum += e.storageRemaining),
					(csatSum += e.csat),
					(ageSum += e.age),
					total++
			})

			var dashboardData: Dashboard = new Dashboard(
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				total,
				cpuUtilSum / total,
				ramUtilSum / total,
				ramSum / total,
				batteryRuntimeSum / total,
				storageRemainingSum / total,
				systemCrashesSum / total,
				ageSum / total,
				csatSum / total
			)

			return of(dashboardData)
		})
	}
}
