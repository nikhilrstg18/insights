import { SeverityEnum } from './../enums/severity.enum'
export class PcdUsageCard {
	constructor(
		public title: string,
		public isonShape: string,
		public toolTip: string,
		public toolTipPosition: string,
		public mericAvg: number,
		public mericAvgText: string,
		public metricMax: number,
		public metricMaxText: string,
		public status: string,
		public severity: SeverityEnum,
		public goodText: string,
		public warningText: string,
		public criticalText: string
	) {}
}
