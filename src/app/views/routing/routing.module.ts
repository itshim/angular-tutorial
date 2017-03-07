import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import {PrimaryComponent} from './primary/primary.component';
import {HomeComponent} from './home/home.component';
import { RoutingRoutingModule } from './routing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule
  ],
  declarations: [PrimaryComponent,HomeComponent]
})
export class RoutingModule { }
