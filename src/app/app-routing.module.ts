import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'reuse-host-component', loadChildren: () => import('src/app/pages/re-use-host/re-use-host.module').then(m => m.ReUseHostModule),
  },
  {
    path: 'transclusions', loadChildren: () => import('src/app/pages/transclusions/transclusions.module').then(m => m.TransclusionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
