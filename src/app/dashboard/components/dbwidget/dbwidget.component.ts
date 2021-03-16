import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
} from '@angular/core'
import { DBWidget } from './../../models/db-widget'

@Component({
	selector: 'i-dbwidget',
	templateUrl: './dbwidget.component.html',
	styleUrls: ['./dbwidget.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DBWidgetComponent implements OnInit {
	@Input() public widget: DBWidget = new DBWidget()
	@Input() public loading: boolean = true

	constructor() {}

	ngOnInit(): void {}
}
