import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ClarityIcons,
  bellIcon,
  cpuIcon,
  memoryIcon,
  batteryIcon,
  hardDiskIcon,
  computerIcon,
  boltIcon,
  hourglassIcon,
  shieldCheckIcon,
  resistorIcon,
  cogIcon,
  layersIcon,
  userIcon,
} from '@cds/core/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    SharedModule.forRoot(),
    HttpClientInMemoryWebApiModule.forFeature(SharedModule.inMemDbService),
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
    );
  }
}
