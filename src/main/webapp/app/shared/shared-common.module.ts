import { NgModule } from '@angular/core';

import { ProductApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ProductApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ProductApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProductApplicationSharedCommonModule {}
