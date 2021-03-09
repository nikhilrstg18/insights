import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'i-pcs',
	templateUrl: './pcs.component.html',
	styleUrls: ['./pcs.component.scss'],
})
export class PcsComponent implements OnInit {
	public showHeatMap: boolean = false
	constructor() {}

	ngOnInit(): void {}
}
