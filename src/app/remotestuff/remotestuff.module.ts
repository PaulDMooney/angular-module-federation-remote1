import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemotestuffRoutingModule } from './remotestuff-routing.module';
import { RemotepageComponent } from './remotepage/remotepage.component';


@NgModule({
  declarations: [
    RemotepageComponent
  ],
  imports: [
    CommonModule,
    RemotestuffRoutingModule
  ]
})
export class RemotestuffModule { }
