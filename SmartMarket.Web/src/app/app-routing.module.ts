import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }