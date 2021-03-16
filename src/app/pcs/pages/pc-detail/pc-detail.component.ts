import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Endpoint } from './../../../shared/models/endpoint'
import { PcdUsageCard } from './../../../shared/models/pcd-usage-card'
import { DashboardService } from './../../../shared/services/dashboard.service'
import { InsightsService } from '../../../shared/services/insights.service'

@Component({
	selector: 'i-pc-detail',
	templateUrl: './pc-detail.component.html',
	styleUrls: ['./pc-detail.component.scss'],
})
export class PcDetailComponent implements OnInit {
	public serviceTag: string = ''
	public endpoint!: Endpoint
	public loading: boolean = false
	public usageCards: PcdUsageCard[] = []

	constructor(
		private actRoute: ActivatedRoute,
		private dashboardService: DashboardService,
		private helperService: InsightsService
	) {}

	ngOnInit(): void {
		this.serviceTag = this.actRoute.snapshot.params.serviceTag
		this.loading = true
		this.dashboardService.get(this.serviceTag).subscribe(endpoint => {
			this.endpoint = endpoint
			this.usageCards = this.getPcdUsageCards(endpoint)
			this.loading = false
		})
	}

	getPcdUsageCards(endpoint: Endpoint): PcdUsageCard[] {
		return this.helperService.getPcdUsageCards(endpoint)
	}
}
