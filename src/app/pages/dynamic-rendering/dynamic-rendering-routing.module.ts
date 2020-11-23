import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicRenderingComponent } from './dynamic-rendering.component';


const routes: Routes = [
  { path: '', component: DynamicRenderingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicRenderingRoutingModule {}
