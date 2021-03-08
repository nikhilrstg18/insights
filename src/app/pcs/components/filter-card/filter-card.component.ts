import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'i-filter-card',
	templateUrl: './filter-card.component.html',
	styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit {
	public enabled: boolean = true
	public sliderValue: number = 10
	constructor() {}

	ngOnInit(): void {}
}
