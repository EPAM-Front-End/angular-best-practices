import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendererComponent } from './renderer.component';



@NgModule({
    declarations: [RendererComponent],
    exports: [
        RendererComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class RendererModule { }
