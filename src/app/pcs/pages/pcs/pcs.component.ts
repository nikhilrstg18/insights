import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
	selector: 'i-pcs',
	templateUrl: './pcs.component.html',
	styleUrls: ['./pcs.component.scss'],
})
export class PcsComponent implements OnInit {
	public showHeatMap: boolean = false
	public queryParams: Params = {}
	constructor(private _activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.queryParams = this._activatedRoute.snapshot.queryParams
	}
}
