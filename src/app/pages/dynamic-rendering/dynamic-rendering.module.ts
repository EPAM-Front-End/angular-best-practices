import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRenderingRoutingModule } from './dynamic-rendering-routing.module';
import { DynamicRenderingComponent } from './dynamic-rendering.component';
import { RendererModule } from './renderer';
import { CompModule } from './comp';
import { CompWithDataModule } from './comp-with-data';


@NgModule({
  declarations: [DynamicRenderingComponent],
  imports: [
    CommonModule,
    DynamicRenderingRoutingModule,
    RendererModule,
    CompModule,
    CompWithDataModule,
  ],
})
export class DynamicRenderingModule {}
