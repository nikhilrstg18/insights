import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { forkJoin, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { MetricEnum } from '../enums/metric.enum'
import { Endpoint } from '../models/endpoint'
import { Dashboard } from './../../dashboard/models/dashboard'
import { IEndpoint } from './../../dashboard/models/i-endpoint'
import { CpuEnum } from './../enums/cpu.enum'

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
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.osFailures >= 10)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const appFailuresCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.appFailures >= 10)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const ageCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.age >= 12)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const cpuUtilCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.cpuUtil === CpuEnum.HIGH)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const ramUtilCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.ramUtil >= 0.3)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const ramCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.ram <= 8)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const storageRemainingCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.storageRemaining <= 0.3)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const batteryHealthCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.batteryHealth <= 0.3)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
		)
		const batteryRuntimeCount$ = endpoints$.pipe(
			map((endpoints: Endpoint[]) => {
				const filtred$ = endpoints.filter(ep => ep.batteryRuntime <= 2)
				return {
					count: filtred$.length,
					avg:
						filtred$.map(ep => ep.csat).reduce((sum, cur) => sum + cur, 0) /
						filtred$.length,
				}
			})
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
