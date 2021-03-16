import { InsightsService } from './../../shared/services/insights.service'
import { MetricEnum } from 'src/app/shared/enums/metric.enum'
import { Params } from '@angular/router'
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
		public queryParam: Params = {},
		private insightsService: InsightsService = new InsightsService()
	) {
		this.caption = this.captionTemplate.replace(
			'{0}',
			this.id === MetricEnum.CPU_UTIL
				? this.insightsService.getCPUText(this.threshold)
				: this.threshold.toString()
		)
		this.queryParam = {
			[this.id]: this.threshold,
		}
	}
}
