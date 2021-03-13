import { Component, OnInit } from '@angular/core'
import { DBWidget } from '../../models/db-widget'
import { HelperService } from './../../../shared/services/helper.service'

@Component({
	selector: 'i-dash-board',
	templateUrl: './dash-board.component.html',
	styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
	public systemIssues: DBWidget[] = []
	public deviceIssues: DBWidget[] = []

	constructor(public helperService: HelperService) {}

	ngOnInit(): void {
		const { systemIssues, deviceIssues } = this.helperService.getWidgetData()
		this.systemIssues = Object.entries(systemIssues).map(item => item[1])
		this.deviceIssues = Object.entries(deviceIssues).map(item => item[1])
	}
}
