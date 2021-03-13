import { SeverityEnum } from './../../../shared/enums/severity.enum'
import { HelperService } from './../../../shared/services/helper.service'
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
	public severityEnum = SeverityEnum
	public usageSeverity: SeverityEnum = SeverityEnum.NA
	public stabilitySeverity: SeverityEnum = SeverityEnum.NA
	@Input() public usageCards: PcdUsageCard[] = []
	@Input() public endpoint: Endpoint = new Endpoint()
	@Input() public loading: boolean = false
	constructor(public helperService: HelperService) {}
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
			this.usageSeverity = this.helperService.getUsageSeverity(
				this.usageCards.find(u => u.title == MetricNameEnum.UTIL_SCORE)
					?.mericAvg || 0
			)
			this.stabilitySeverity = this.helperService.getUsageSeverity(
				((this.usageCards.find(u => u.title == MetricNameEnum.OS_FAILURES)
					?.mericAvg || 0) /
					20 +
					(this.usageCards.find(u => u.title == MetricNameEnum.APP_FAILURES)
						?.mericAvg || 0) /
						30) /
					2
			)
		}
	}
}
