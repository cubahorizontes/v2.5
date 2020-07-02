import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecoveryPage} from './component/recovery.page';

const routes: Routes = [
    {
        path: '',
        component: RecoveryPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecoveryPageRoutingModule {
}
