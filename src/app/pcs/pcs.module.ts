import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PcsRoutingModule } from './pcs-routing.module';

@NgModule({
  declarations: [...PcsRoutingModule.components],
  imports: [CommonModule, PcsRoutingModule],
})
export class PcsModule {}
