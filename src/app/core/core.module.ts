import { NgModule, Optional, SkipSelf } from '@angular/core';

import {CanActivateService} from './can-activate.service'

@NgModule({
    imports: [],
    providers: [CanActivateService],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('Core Module Already Exists');
        }
    }
}