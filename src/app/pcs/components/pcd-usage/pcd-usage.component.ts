import { CpuEnum } from './../../../shared/enums/cpu.enum'
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	SimpleChanges,
} from '@angular/core'
import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { Endpoint } from 'src/app/shared/models/endpoint'
import { PcdUsageCard } from 'src/app/shared/models/pcd-usage-card'

@Component({
	selector: 'i-pcd-usage',
	templateUrl: './pcd-usage.component.html',
	styleUrls: ['./pcd-usage.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PcdUsageComponent implements OnChanges {
	public healthUsageCards: PcdUsageCard[] = []
	public stabilityUsageCards: PcdUsageCard[] = []
	@Input() public usageCards: PcdUsageCard[] = []
	@Input() public endpoint: Endpoint = new Endpoint()
	@Input() public loading: boolean = false
	constructor() {}
	public ngOnChanges(changes: SimpleChanges): void {
		if (changes) {
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
