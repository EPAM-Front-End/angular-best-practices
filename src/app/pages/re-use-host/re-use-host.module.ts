import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReUseHostRoutingModule } from './re-use-host-routing.module';
import { ReUseHostComponent } from './re-use-host.component';
import { WithWrapperComponent } from './with-wrapper';
import { NoWrapperComponent } from './no-wrapper';


@NgModule({
  declarations: [ReUseHostComponent, NoWrapperComponent, WithWrapperComponent],
  imports: [
    CommonModule,
    ReUseHostRoutingModule,
  ],
})
export class ReUseHostModule {}
