import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransclusionsRoutingModule } from './transclusions-routing.module';
import { TransclusionsComponent } from './transclusions.component';
import { OneComponent } from './one';
import { TwoComponent } from './two';
import { ThreeComponent } from './three';


@NgModule({
  declarations: [TransclusionsComponent, OneComponent, TwoComponent, ThreeComponent],

  imports: [
    CommonModule,
    TransclusionsRoutingModule,
  ],
})
export class TransclusionsModule {}
