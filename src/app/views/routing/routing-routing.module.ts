import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CanActivateService} from './../../core/can-activate.service';
import {PrimaryComponent} from './primary/primary.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full'
  }, {
    path: 'primary',
    component: PrimaryComponent,
    canActivate: [CanActivateService]
  }, {
    path: 'secondary',
    loadChildren: './secondary/secondary.module#SecondaryModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingRoutingModule { }
