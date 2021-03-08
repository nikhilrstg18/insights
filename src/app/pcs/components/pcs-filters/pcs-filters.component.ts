import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'i-pcs-filters',
	templateUrl: './pcs-filters.component.html',
	styleUrls: ['./pcs-filters.component.scss'],
})
export class PcsFiltersComponent implements OnInit {
	public filtersExpanded: boolean = true

	constructor() {}

	ngOnInit(): void {}
}
