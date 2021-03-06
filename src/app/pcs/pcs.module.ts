import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PcsRoutingModule } from './pcs-routing.module';

@NgModule({
  declarations: [...PcsRoutingModule.components],
  imports: [CommonModule, PcsRoutingModule, SharedModule],
})
export class PcsModule {}
