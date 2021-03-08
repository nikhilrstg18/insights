import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
	batteryIcon,
	bellIcon,
	boltIcon,
	ClarityIcons,
	cogIcon,
	computerIcon,
	cpuIcon,
	hardDiskIcon,
	hourglassIcon,
	layersIcon,
	memoryIcon,
	resistorIcon,
	shieldCheckIcon,
	userIcon,
} from '@cds/core/icon'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		SharedModule.forRoot(),
		HttpClientInMemoryWebApiModule.forFeature(SharedModule.inMemDbService, {
			delay: 1200,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor() {
		ClarityIcons.addIcons(
			bellIcon,
			cpuIcon,
			memoryIcon,
			boltIcon,
			batteryIcon,
			hardDiskIcon,
			computerIcon,
			hourglassIcon,
			shieldCheckIcon,
			resistorIcon,
			cogIcon,
			layersIcon,
			userIcon
		)
	}
}
