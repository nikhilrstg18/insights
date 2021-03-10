import { IAlertEvent } from './interfaces/i-alert-event'

export class Alerts {
	constructor(
		public applicationCrashEvents: IAlertEvent[] = [],
		public systemCrashEvents: IAlertEvent[] = [],
		public unexpectedShutdownEvents: IAlertEvent[] = []
	) {}
}
