export class PcdUsageCard {
	constructor(
		public title: string,
		public isonShape: string,
		public toolTip: string,
		public mericAvg: number,
		public mericAvgText: string,
		public metricMax: number,
		public metricMaxText: string
	) {}
}