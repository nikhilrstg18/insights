import { Injectable } from '@angular/core';
import { IEndpoint } from 'src/app/dashboard/models/i-endpoint';
import { DashboardService } from './dashboard.service';
import { delay } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public size: number = 100;
  public latency: number = 0;
  private _all: IEndpoint[] = [];
  private _currentQuery: IEndpoint[] = [];

  constructor(private dashboardService: DashboardService) {}

  get all(): IEndpoint[] {
    return this._all.slice();
  }

  async reset() {
    this._all = await this.dashboardService.getAll().toPromise();
  }

  filter(filters: { [key: string]: string[] }): InventoryService {
    this._checkCurrentQuery();
    if (filters) {
      for (const key in filters) {
        if (filters[key].length === 0) {
          continue;
        }

        let getFilterProperty = (endpoint: IEndpoint) => '' + endpoint[key];
        // if (key === "pokemon") {
        //   getFilterProperty = (user: IEndpoint) => user.pokemon.name;
        // }

        const lowerCase = filters[key].map((value) => value.toLowerCase());
        this._currentQuery = this._currentQuery.filter((user) => {
          for (const value of lowerCase) {
            if (getFilterProperty(user).toLowerCase().indexOf(value) >= 0) {
              return true;
            }
          }
          return false;
        });
      }
    }
    return this;
  }

  sort(sort: { by: string; reverse: boolean }): InventoryService {
    this._checkCurrentQuery();
    if (sort && sort.by) {
      let getSortProperty = (endpoint: IEndpoint) => endpoint[sort.by];
      //   if (sort.by === "pokemon") {
      //     getSortProperty = (user: IEndpoint) => user.pokemon.number;
      //   }

      this._currentQuery.sort((a, b) => {
        let comp = 0;
        const propA = getSortProperty(a),
          propB = getSortProperty(b);
        if (propA < propB) {
          comp = -1;
        } else if (propA > propB) {
          comp = 1;
        }
        if (sort.reverse) {
          comp = -comp;
        }
        return comp;
      });
    }
    return this;
  }

  fetch(
    skip: number = 0,
    limit: number = this._currentQuery.length
  ): Promise<FetchResult> {
    // Stringify and parse to mimic new object creation like a real HTTP request
    const items = JSON.stringify(this._currentQuery.slice(skip, skip + limit));
    const result: FetchResult = {
      endpoints: JSON.parse(items),
      length: this._currentQuery.length,
    };
    this._currentQuery = [];
    return this._fakeHttp(result);
  }

  private _checkCurrentQuery() {
    if (!this._currentQuery.length) {
      this._currentQuery = this._all.slice();
    }
  }

  private _fakeHttp<T>(result: T): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), this.latency);
    });
  }
}

export interface FetchResult {
  endpoints: IEndpoint[];
  length: number;
}
