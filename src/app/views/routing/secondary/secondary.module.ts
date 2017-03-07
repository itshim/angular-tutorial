import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryRoutingModule } from './secondary-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SecondaryRoutingModule
  ],
  declarations: [HomeComponent]
})
export class SecondaryModule { 
  constructor() {
  }
}
