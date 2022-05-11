import { NgModule } from '@angular/core';


import { AdminComponent } from './admin.component';

import { SharedModule } from '../shared';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [

    AdminComponent,
   
  ],
  providers: [
  ]
})
export class AdminModule {}
