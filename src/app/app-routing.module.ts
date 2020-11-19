import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'reuse-host-component', loadChildren: () => import('src/app/pages/re-use-host/re-use-host.module').then(m => m.ReUseHostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
