import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransclusionsRoutingModule } from './transclusions-routing.module';
import { TransclusionsComponent } from './transclusions.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [TransclusionsComponent, OneComponent, TwoComponent, ThreeComponent],

  imports: [
    CommonModule,
    TransclusionsRoutingModule,
  ],
})
export class TransclusionsModule {}
