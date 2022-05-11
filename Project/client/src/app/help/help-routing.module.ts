import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help.component';
import { HelpAuthResolver } from './help-auth-resolver.service';

const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent,
    resolve: {
      isAuthenticated: HelpAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {}
