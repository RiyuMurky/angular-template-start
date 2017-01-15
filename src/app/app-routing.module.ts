import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
// Root
import { LoginComponent }   from './login/login.component';
import { SignupComponent }     from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Dashboard
import { DashboardV1Component } from './pages/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './pages/dashboard-v2/dashboard-v2.component';
// Layout options
import { LayoutOptionsComponent } from './pages/layout-options/layout-options.component';
// Widgets
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { ChartsComponent } from './pages/charts/charts.component';
// UI Elements
import { UiElementsGeneralComponent } from './pages/ui-elements-general/ui-elements-general.component';
import { UiElementsIconsComponent } from './pages/ui-elements-icons/ui-elements-icons.component';
import { UiElementsButtonsComponent } from './pages/ui-elements-buttons/ui-elements-buttons.component';
import { UiElementsSlidersComponent } from './pages/ui-elements-sliders/ui-elements-sliders.component';
import { UiElementsTimelineComponent } from './pages/ui-elements-timeline/ui-elements-timeline.component';
import { UiElementsModalsComponent } from './pages/ui-elements-modals/ui-elements-modals.component';
// Forms
import { FormsGeneralElementsComponent } from './pages/forms-general-elements/forms-general-elements.component';
import { FormsAdvancedElementsComponent } from './pages/forms-advanced-elements/forms-advanced-elements.component';
import { FormsEditorsComponent } from './pages/forms-editors/forms-editors.component';
// Tables
import { SimpleTablesComponent } from './pages/simple-tables/simple-tables.component';
import { DataTablesComponent } from './pages/data-tables/data-tables.component';
// Calendar, Mailbox
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
// Examples
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
// Documentation
import { DocumentationComponent } from './pages/documentation/documentation.component';
// PageNotFoundComponent
// import {} from '';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      // Dashboard
      { path: 'dashboardv1', component: DashboardV1Component },
      { path: 'dashboardv2', component: DashboardV2Component },
      // Layout options
      { path: 'layoutoptions', component: LayoutOptionsComponent },
      // Widgets
      { path: 'widgets', component: WidgetsComponent },
      { path: 'charts', component: ChartsComponent },
      // UI Elements
      { path: 'uielementsgeneral', component: UiElementsGeneralComponent },
      { path: 'uielementsicons', component: UiElementsIconsComponent },
      { path: 'uielementsbuttons', component: UiElementsButtonsComponent },
      { path: 'uielementssliders', component: UiElementsSlidersComponent },
      { path: 'uielementstimeline', component: UiElementsTimelineComponent },
      { path: 'uielementsmodals', component: UiElementsModalsComponent },
      // Forms
      { path: 'formsgeneral', component: FormsGeneralElementsComponent },
      { path: 'formsadvanced', component: FormsAdvancedElementsComponent },
      { path: 'formseditors', component: FormsEditorsComponent },
      // Tables
      { path: 'simpletables', component: SimpleTablesComponent },
      { path: 'datatables', component: DataTablesComponent },
      // Calendar, Mailbox
      { path: 'calendar', component: CalendarComponent },
      { path: 'mailbox', component: MailboxComponent },
      // Examples
      { path: 'blackpage', component: BlankPageComponent },
      { path: 'searchpage', component: SearchResultComponent },
      // Documentation
      { path: 'documentation', component: DocumentationComponent }
    ]},
  { path: '**', component: DashboardComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
