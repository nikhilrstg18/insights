import { MetricEnum } from 'src/app/shared/enums/metric.enum'
import { FilterContext } from './filter-context'

export class Filters {
	constructor(
		public osFailures: FilterContext = new FilterContext(0, '>='),
		public appFailures: FilterContext = new FilterContext(0, '>='),
		public age: FilterContext = new FilterContext(0, '>='),
		public cpuUtil: FilterContext = new FilterContext(0, '=='),
		public ramUtil: FilterContext = new FilterContext(0, '>='),
		public ram: FilterContext = new FilterContext(0, '<='),
		public storageRemaining: FilterContext = new FilterContext(0, '<='),
		public batteryHealth: FilterContext = new FilterContext(0, '<='),
		public batteryRuntime: FilterContext = new FilterContext(0, '<=')
	) {}
	[key: string]: FilterContext
}
