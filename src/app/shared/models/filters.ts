import { FilterContext } from './filter-context'

export class Filters {
	constructor(
		public osFailures: FilterContext = new FilterContext(),
		public appFailures: FilterContext = new FilterContext(),
		public age: FilterContext = new FilterContext(),
		public cpuUtil: FilterContext = new FilterContext(),
		public ramUtil: FilterContext = new FilterContext(),
		public ram: FilterContext = new FilterContext(),
		public storageRemaining: FilterContext = new FilterContext(),
		public batteryHealth: FilterContext = new FilterContext(),
		public batteryRuntime: FilterContext = new FilterContext()
	) {}
	[key: string]: FilterContext
}
