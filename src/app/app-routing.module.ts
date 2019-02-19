import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [{
  path: '**',
  redirectTo: ''
}, {
  path: '**/#/*8',
  redirectTo: ''
}];

const config: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
