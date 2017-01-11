import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { SignupComponent }     from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardV1Component } from './pages/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './pages/dashboard-v2/dashboard-v2.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';

// PageNotFoundComponent

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'dashboardv1',
        component: DashboardV1Component
      },
      {
        path: 'dashboardv2',
        component: DashboardV2Component
      },
      {
        path: 'blackpage',
        component: BlankPageComponent
      }
    ]},
  { path: '**', component: DashboardComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
