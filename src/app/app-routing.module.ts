import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'reuse-host-component', loadChildren: () => import('./pages/re-use-host').then(m => m.ReUseHostModule),
  },
  {
    path: 'transclusions', loadChildren: () => import('./pages/transclusions').then(m => m.TransclusionsModule),
  },
  {
    path: 'dynamic-rendering', loadChildren: () => import('./pages/dynamic-rendering').then(m => m.DynamicRenderingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
