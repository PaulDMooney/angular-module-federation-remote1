import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemotepageComponent } from './remotepage/remotepage.component';

const routes: Routes = [
  {path: '',
   component: RemotepageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemotestuffRoutingModule { }
