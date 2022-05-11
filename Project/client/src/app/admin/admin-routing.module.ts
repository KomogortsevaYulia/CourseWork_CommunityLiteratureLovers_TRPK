import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminResolver } from './admin-resolver.service';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    resolve: {
      profile: AdminResolver
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
