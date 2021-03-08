import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { IEndpoint } from './../../../dashboard/models/i-endpoint';
import {
  FetchResult,
  InventoryService,
} from './../../../shared/services/inventory.service';

@Component({
  selector: 'i-pcs-grid',
  templateUrl: './pcs-grid.component.html',
  styleUrls: ['./pcs-grid.component.scss'],
})
export class PcsGridComponent implements OnInit {
  public endpoints: IEndpoint[] = [];
  public total: number = 0;
  public loading: boolean = true;
  public page: number = 1;
  public firstLoad: boolean = false;
  public selected: any[] = [];

  constructor(private inventory: InventoryService) {
    this.inventory.size = 100;
    this.inventory.latency = 500;
  }

  ngOnInit() {}

  //@ called from view by clr-datagrid
  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    let filters: { [prop: string]: any[] } = {};

    // if filters create filters object
    if (state?.filters) {
      for (let filter of state.filters) {
        let { property, value } = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }

    if (state?.page) {
      if (state.page.from == -1) {
        state.page.from = 0;
      }
      if (state.page.to == -1) {
        state.page.to = 9;
      }
    }

    this.inventory.reset().subscribe((endpoints: IEndpoint[]) => {
      this.inventory.all = endpoints;
      this.inventory
        .filter(filters)
        .sort(<{ by: string; reverse: boolean }>state.sort)
        .fetch(state?.page?.from, state?.page?.size)
        .subscribe((result: FetchResult) => {
          this.endpoints = result.endpoints;
          this.total = result.length;
          this.loading = false;
        });
    });
  }
}
