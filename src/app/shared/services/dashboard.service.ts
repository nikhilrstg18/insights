import { Dashboard } from './../../dashboard/models/dashboard'
import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { forkJoin, merge, Observable } from 'rxjs'
import { count, map } from 'rxjs/operators'
import { Endpoint } from '../models/endpoint'
import { IEndpoint } from './../../dashboard/models/i-endpoint'
import { CpuEnum } from './../enums/cpu.enum'
import { MetricEnum } from '../enums/metric.enum'

@Injectable({
	providedIn: 'root',
})
export class DashboardService {
	constructor(private http: HttpClient) {}

	getAll(): Observable<Endpoint[]> {
		return this.http
			.get<IEndpoint[]>('/api/endpoints')
			.pipe(
				map((iEndpoints: IEndpoint[]) => iEndpoints.map(e => new Endpoint(e)))
			)
	}
	get(serviceTag: string): Observable<Endpoint> {
		return this.http
			.get<IEndpoint[]>('/api/endpoints')
			.pipe(
				map(
					(iEndpoints: IEndpoint[]) =>
						iEndpoints
							.filter(e => e.serviceTag === serviceTag)
							.map(e => new Endpoint(e))[0]
				)
			)
	}

	getWidgets(): Observable<Dashboard> {
		const endpoints$ = this.getAll()
		const total$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => endpoints.length)
		)
		const osFailuresCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.osFailures >= 10).length
			)
		)
		const appFailuresCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.appFailures >= 10).length
			)
		)
		const ageCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) => endpoints.filter(ep => ep.age >= 12).length
			)
		)
		const cpuUtilCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.cpuUtil === CpuEnum.HIGH).length
			)
		)
		const ramUtilCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.ramUtil >= 0.3).length
			)
		)
		const ramCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => endpoints.filter(ep => ep.ram <= 8).length)
		)
		const storageRemainingCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.storageRemaining <= 0.3).length
			)
		)
		const batteryHealthCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.batteryHealth <= 0.3).length
			)
		)
		const batteryRuntimeCount$ = endpoints$.pipe(
			map(
				(endpoints: Endpoint[]) =>
					endpoints.filter(ep => ep.batteryRuntime <= 2).length
			)
		)

		return forkJoin({
			[MetricEnum.OS_FAILURES]: osFailuresCount$,
			[MetricEnum.APP_FAILURES]: appFailuresCount$,
			[MetricEnum.AGE]: ageCount$,
			[MetricEnum.CPU_UTIL]: cpuUtilCount$,
			[MetricEnum.RAM_UTIL]: ramUtilCount$,
			[MetricEnum.RAM]: ramCount$,
			[MetricEnum.STORAGE_REMAINING]: storageRemainingCount$,
			[MetricEnum.BATTERY_RUNTIME]: batteryHealthCount$,
			[MetricEnum.BATTERY_HEALTH]: batteryRuntimeCount$,
			total: total$,
		})
	}
}
