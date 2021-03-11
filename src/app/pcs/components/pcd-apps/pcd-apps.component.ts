import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

@Component({
	selector: 'i-pcd-apps',
	templateUrl: './pcd-apps.component.html',
	styleUrls: ['./pcd-apps.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PcdAppsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
