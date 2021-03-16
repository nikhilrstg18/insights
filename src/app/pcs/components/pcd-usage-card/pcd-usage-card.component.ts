import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { MetricNameEnum } from 'src/app/shared/enums/metric-name.enum'
import { PcdUsageCard } from 'src/app/shared/models/pcd-usage-card'
import { InsightsService } from '../../../shared/services/insights.service'

@Component({
	selector: 'i-pcd-usage-card',
	templateUrl: './pcd-usage-card.component.html',
	styleUrls: ['./pcd-usage-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PcdUsageCardComponent implements OnInit {
	public metricNameEnum = MetricNameEnum

	@Input() public usageCard!: PcdUsageCard

	constructor(public helperService: InsightsService) {}

	ngOnInit(): void {}
}
