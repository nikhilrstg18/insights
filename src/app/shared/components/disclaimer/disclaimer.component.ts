import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'i-disclaimer',
	templateUrl: './disclaimer.component.html',
	styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent implements OnInit {
	@Input() public showLastWeekMsg: boolean = true

	constructor() {}

	ngOnInit(): void {}
}
