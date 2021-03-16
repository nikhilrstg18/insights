export class FilterContext {
	constructor(
		public value: number = 0,
		public active: boolean = false,
		public operator: string = ''
	) {}
}
