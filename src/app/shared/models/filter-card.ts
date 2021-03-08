export class FilterCard {
	constructor(
		public id: string = '',
		public title: string = '',
		public operator: string = '',
		public enabled: boolean = false,
		public sliderValue: number = 0,
		public defaultSliderValue: number = 0,
		public minSliderValue: number = 0,
		public maxSliderValue: number = 0,
		public desc1: string = '',
		public desc2: string = '',
		public unit: string = '',
		public labels: string[] = [],
		public stepSliderValue?: any,
		public deepLabels?: any
	) {}
}
