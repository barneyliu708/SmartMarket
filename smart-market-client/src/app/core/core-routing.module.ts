import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { CoreDashboardComponent } from './core-dashboard/core-dashboard.component';
import { CoreHomeComponent } from './core-home/core-home.component';

const routes: Routes = [
    {
        path: 'home',
        component: CoreHomeComponent
    },
    {
        path: 'dashboard',
        component: CoreDashboardComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
