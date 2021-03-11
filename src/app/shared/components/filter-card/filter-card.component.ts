import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { FilterCard } from 'src/app/shared/models/filter-card'

@Component({
	selector: 'i-filter-card',
	templateUrl: './filter-card.component.html',
	styleUrls: ['./filter-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
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
