export class Dashboard {
	constructor(
		public osFailures: CountandAvgCsat,
		public appFailures: CountandAvgCsat,
		public age: CountandAvgCsat,
		public cpuUtil: CountandAvgCsat,
		public ramUtil: CountandAvgCsat,
		public ram: CountandAvgCsat,
		public storageRemaining: CountandAvgCsat,
		public batteryHealth: CountandAvgCsat,
		public batteryRuntime: CountandAvgCsat
	) {}
}
export interface CountandAvgCsat {
	count: number
	avg: number
}
