import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [{
  path: '**',
  redirectTo: ''
}];

const config: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
