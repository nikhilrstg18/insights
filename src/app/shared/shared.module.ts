import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrIconModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, bellIcon } from '@cds/core/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClrIconModule],
  exports: [ClrIconModule],
  //no providers here
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
