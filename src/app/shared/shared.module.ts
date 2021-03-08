import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
	ClarityModule,
	ClrAccordionModule,
	ClrDatagridModule,
	ClrIconModule,
} from '@clr/angular'
import { InMemDBService } from './services/in-mem-db.service'
import { InventoryService } from './services/inventory.service'
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component'
import { MatchHeightDirective } from './directives/match-height.directive'

@NgModule({
	declarations: [DisclaimerComponent, MatchHeightDirective],
	imports: [
		CommonModule,
		ClarityModule,
		ClrIconModule,
		ClrAccordionModule,
		ClrDatagridModule,
		HttpClientModule,
		FormsModule,
	],
	exports: [
		ClrIconModule,
		ClrAccordionModule,
		ClrDatagridModule,
		ClarityModule,
		FormsModule,
		DisclaimerComponent,
		MatchHeightDirective,
	],
	//no providers here
})
export class SharedModule {
	static inMemDbService = InMemDBService
	static forRoot() {
		return {
			ngModule: SharedModule,
			providers: [InMemDBService, InventoryService],
		}
	}
}
