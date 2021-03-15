export class Dashboard {
	constructor(
		public osFailures: CountandAvgCsat = new CountandAvgCsat(),
		public appFailures: CountandAvgCsat = new CountandAvgCsat(),
		public age: CountandAvgCsat = new CountandAvgCsat(),
		public cpuUtil: CountandAvgCsat = new CountandAvgCsat(),
		public ramUtil: CountandAvgCsat = new CountandAvgCsat(),
		public ram: CountandAvgCsat = new CountandAvgCsat(),
		public storageRemaining: CountandAvgCsat = new CountandAvgCsat(),
		public batteryHealth: CountandAvgCsat = new CountandAvgCsat(),
		public batteryRuntime: CountandAvgCsat = new CountandAvgCsat()
	) {}
}
export class CountandAvgCsat {
	constructor(public count: number = 0, public avg: number = 0) {}
}
