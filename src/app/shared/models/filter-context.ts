export class FilterContext {
	public active: boolean = false
	constructor(public value: number = 0, public operator: string) {
		this.active = !!value
	}
}
