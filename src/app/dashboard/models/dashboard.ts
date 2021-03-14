export class Dashboard {
	constructor(
		public osFailures: number = 0,
		public appFailures: number = 0,
		public age: number = 0,
		public cpuUtil: number = 0,
		public ramUtil: number = 0,
		public ram: number = 0,
		public storageRemaining: number = 0,
		public batteryHealth: number = 0,
		public batteryRuntime: number = 0
	) {}
}
