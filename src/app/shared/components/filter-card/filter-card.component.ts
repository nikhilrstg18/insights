import { FilterCard } from 'src/app/shared/models/filter-card'
import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'i-filter-card',
	templateUrl: './filter-card.component.html',
	styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit {
	public defaultSliderValue: number = 0
	@Input() public cardData!: FilterCard
	@Input() public hideOperator: boolean = false
	@Input() public hideSliderValue: boolean = false
	constructor() {}

	ngOnInit(): void {
		this.defaultSliderValue = this.cardData.defaultSliderValue
	}
}
