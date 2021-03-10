import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { PcdUsageCard } from 'src/app/shared/models/pcd-usage-card'

@Component({
	selector: 'i-pcd-usage',
	templateUrl: './pcd-usage.component.html',
	styleUrls: ['./pcd-usage.component.scss'],
})
export class PcdUsageComponent implements OnChanges {
	public healthUsageCards: PcdUsageCard[] = []
	public stabilityUsageCards: PcdUsageCard[] = []
	@Input() public usageCards: PcdUsageCard[] = []
	constructor() {}
	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
			if (changes.usageCards.isFirstChange()) {
				this.healthUsageCards = this.usageCards.filter(
					x =>
						x.title !== MetricNameEnum.OS_FAILURES &&
						x.title !== MetricNameEnum.APP_FAILURES
				)
				this.stabilityUsageCards = this.usageCards.filter(
					x =>
						x.title === MetricNameEnum.OS_FAILURES ||
						x.title === MetricNameEnum.APP_FAILURES
				)
			}
		}
	}
}
