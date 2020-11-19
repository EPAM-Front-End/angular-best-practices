import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReUseHostRoutingModule } from './re-use-host-routing.module';
import { ReUseHostComponent } from './re-use-host.component';
import { WithWrapperModule } from './with-wrapper/with-wrapper.module';
import { NoWrapperModule } from './no-wrapper/no-wrapper.module';


@NgModule({
  declarations: [ReUseHostComponent],
  imports: [
    CommonModule,
    ReUseHostRoutingModule,
    WithWrapperModule,
    NoWrapperModule,
  ],
})
export class ReUseHostModule { }
