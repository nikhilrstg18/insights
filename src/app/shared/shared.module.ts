import { InventoryService } from './services/inventory.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import '@cds/core/icon/register.js';
import '@cds/core/accordion/register.js';
import {
  ClrAccordionModule,
  ClrIconModule,
  ClrDatagridModule,
} from '@clr/angular';
import { InMemDBService } from './services/in-mem-db.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClrIconModule,
    ClrAccordionModule,
    ClrDatagridModule,
    HttpClientModule,
  ],
  exports: [ClrIconModule, ClrAccordionModule, ClrDatagridModule],
  //no providers here
})
export class SharedModule {
  static inMemDbService = InMemDBService;
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [InMemDBService, InventoryService],
    };
  }
}
