import {
	AfterViewChecked,
	Directive,
	ElementRef,
	HostListener,
	Input,
} from '@angular/core'

@Directive({
	selector: '[iMatchHeight]',
})
export class MatchHeightDirective implements AfterViewChecked {
	//@ class name to match height
	@Input()
	matchHeightFor: string = ''

	@HostListener('window:resize')
	onResize() {
		// call our matchHeight function here
		this.matchHeight(this.el.nativeElement, this.matchHeightFor)
	}

	constructor(private el: ElementRef) {}

	ngAfterViewChecked() {
		//@ call our matchHeight function here later
		this.matchHeight(this.el.nativeElement, this.matchHeightFor)
	}

	matchHeight(parent: HTMLElement, className: string) {
		//@ match height logic here
		if (!parent) return
		const children = parent.getElementsByClassName(className)

		if (!children) return

		// reset all children height
		Array.from(children).forEach(
			(x: Element) => ((x as HTMLElement).style.height = 'initial')
		)

		// gather all height
		const itemHeights = Array.from(children).map(
			x => x.getBoundingClientRect().height
		)

		// find max height
		const maxHeight = itemHeights.reduce((prev, curr) => {
			return curr > prev ? curr : prev
		}, 0)

		// apply max height
		Array.from(children).forEach(
			(x: Element) => ((x as HTMLElement).style.height = `${maxHeight}px`)
		)
	}
}
