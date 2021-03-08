import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'i-pc-detail',
	templateUrl: './pc-detail.component.html',
	styleUrls: ['./pc-detail.component.scss'],
})
export class PcDetailComponent implements OnInit {
	public serviceTag: string = ''

	constructor(private actRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.serviceTag = this.actRoute.snapshot.params.serviceTag
	}
}
