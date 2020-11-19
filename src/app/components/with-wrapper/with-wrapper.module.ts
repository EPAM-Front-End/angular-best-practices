import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithWrapperComponent } from 'src/app/components/with-wrapper/with-wrapper.component';


@NgModule({
  declarations: [WithWrapperComponent],
  imports: [
    CommonModule,
  ],
  exports: [WithWrapperComponent],
})
export class WithWrapperModule {}
