import { NgModule } from '@angular/core';

import { HelpComponent } from './help.component';
import { SharedModule } from '../shared';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HelpRoutingModule
  ],
  declarations: [
    HelpComponent
  ],
  providers: [
  ]
})
export class HelpModule {}