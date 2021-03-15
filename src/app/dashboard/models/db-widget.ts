import { Params } from '@angular/router'
import { MetricEnum } from './../../shared/enums/metric.enum'
export class DBWidget {
	constructor(
		public id: string = '',
		public title: string = '',
		public iconShape: string = '',
		public captionTemplate: string = '',
		public threshold: number = 0,
		public count: number = 0,
		public csat: number = 0,
		public caption: string = '',
		public queryParam: Params = {}
	) {
		this.caption = this.captionTemplate.replace(
			'{0}',
			this.threshold.toString()
		)
		this.queryParam = {
			[this.id]: this.threshold,
		}
	}
}
