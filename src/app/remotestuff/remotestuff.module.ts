import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemotestuffRoutingModule } from './remotestuff-routing.module';
import { RemotepageComponent } from './remotepage/remotepage.component';
import { MainModule } from 'host-app-common';


@NgModule({
  declarations: [
    RemotepageComponent
  ],
  imports: [
    CommonModule,
    RemotestuffRoutingModule,
    MainModule
  ]
})
export class RemotestuffModule { }
