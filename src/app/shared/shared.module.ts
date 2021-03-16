import { InsightsService } from './services/insights.service'
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
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component'
import { FilterCardComponent } from './components/filter-card/filter-card.component'
import { MatchHeightDirective } from './directives/match-height.directive'
import { UnitPipe } from './pipes/unit.pipe'
import { InMemDBService } from './services/in-mem-db.service'
import { InventoryService } from './services/inventory.service'

@NgModule({
	declarations: [
		DisclaimerComponent,
		FilterCardComponent,
		MatchHeightDirective,
		UnitPipe,
	],
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
		FilterCardComponent,
		MatchHeightDirective,
		UnitPipe,
	],
	//no providers here
})
export class SharedModule {
	static inMemDbService = InMemDBService
	static forRoot() {
		return {
			ngModule: SharedModule,
			providers: [InMemDBService, InventoryService, InsightsService],
		}
	}
}
