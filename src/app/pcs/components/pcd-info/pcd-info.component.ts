import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { MetricNameEnum } from './../../../shared/enums/metric-name.enum'
import { Endpoint } from './../../../shared/models/endpoint'

@Component({
	selector: 'i-pcd-info',
	templateUrl: './pcd-info.component.html',
	styleUrls: ['./pcd-info.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PcdInfoComponent implements OnInit {
	public metricNameEnum = MetricNameEnum

	@Input() public endpoint: Endpoint = new Endpoint()
	@Input() public loading: boolean = false

	constructor() {}

	ngOnInit(): void {}
}
