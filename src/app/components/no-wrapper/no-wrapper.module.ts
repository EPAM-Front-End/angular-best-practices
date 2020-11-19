import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoWrapperComponent } from 'src/app/components/no-wrapper/no-wrapper.component';


@NgModule({
  declarations: [NoWrapperComponent],
  imports: [
    CommonModule,
  ],
  exports: [NoWrapperComponent],
})
export class NoWrapperModule {}
