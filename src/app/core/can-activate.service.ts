import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateService implements CanActivate {
  canActivate() {
    console.log('CanActivate');
    return true;
  }

  constructor() { }

}
