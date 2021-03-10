export class AlertFilters {
	constructor(
		public unexpectedShutdownCount: number = 0,
		public appErrorCount: number = 0,
		public systemErrorCount: number = 0,
		public unexpectedShutdown: boolean = unexpectedShutdownCount > 0,
		public appError: boolean = appErrorCount > 0,
		public systemError: boolean = systemErrorCount > 0
	) {}
}
