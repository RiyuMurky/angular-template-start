import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuardService } from 'app/shared/services/auth-guard.service';
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
    canActivate: [ AuthGuardService ],
    data: { breadcrumb: "Home" },
    children: [
      // RedirectTo
      { path: '', redirectTo: 'dashboardv1', pathMatch: 'full' },
      // Dashboard
      { path: 'dashboardv1', component: DashboardV1Component,
        data: { breadcrumb: ["Dashboard"], header: {title: "Dashboard", info: "Control panel"} } },
      { path: 'dashboardv2', component: DashboardV2Component,
        data: { breadcrumb: ["Dashboard"], header: {title: "Dashboard", info: "Version 2.0"} } },
      // Layout options
      { path: 'layoutoptions', component: LayoutOptionsComponent,
        data: { breadcrumb: "Layout Options", header: {title: "Layout", info: "Layout Options"} } },
      // Widgets
      { path: 'widgets', component: WidgetsComponent,
        data: { breadcrumb: "Widgets", header: {title: "Widgets", info: "Preview page"} } },
      { path: 'charts', component: ChartsComponent,
        data: { breadcrumb: "Charts", header: {title: "Charts", info: "Preview sample"} } },
      // UI Elements
      { path: 'uielementsgeneral', component: UiElementsGeneralComponent,
        data: { breadcrumb: ["UI", "General"], header: {title: "General UI", info: "Preview of UI elements"} } },
      { path: 'uielementsicons', component: UiElementsIconsComponent,
        data: { breadcrumb: ["UI", "Icons"], header: {title: "Icons", info: "a set of beautiful icons"} } },
      { path: 'uielementsbuttons', component: UiElementsButtonsComponent,
        data: { breadcrumb: ["UI", "Buttons"], header: {title: "Buttons", info: "Control panel"} } },
      { path: 'uielementssliders', component: UiElementsSlidersComponent,
        data: { breadcrumb: ["UI", "Sliders"], header: {title: "Sliders", info: "range sliders"} } },
      { path: 'uielementstimeline', component: UiElementsTimelineComponent,
        data: { breadcrumb: ["UI", "Timeline"], header: {title: "Timeline", info: "example"} } },
      { path: 'uielementsmodals', component: UiElementsModalsComponent,
        data: { breadcrumb: ["UI", "Modals"], header: {title: "Modals", info: "new"} } },
      // Forms
      { path: 'formsgeneral', component: FormsGeneralElementsComponent,
        data: { breadcrumb: ["Forms", "General"], header: {title: "General Form Elements", info: "Preview"} } },
      { path: 'formsadvanced', component: FormsAdvancedElementsComponent,
        data: { breadcrumb: ["Forms", "Advanced"], header: {title: "Advanced Form Elements", info: "Preview"} } },
      { path: 'formseditors', component: FormsEditorsComponent,
        data: { breadcrumb: ["Forms", "Editors"], header: {title: "Text Editors", info: "Advanced form element"} } },
      // Tables
      { path: 'simpletables', component: SimpleTablesComponent,
        data: { breadcrumb: ["Tables", "Simple Tables"], header: {title: "Simple Tables", info: "preview of simple tables"} } },
      { path: 'datatables', component: DataTablesComponent,
        data: { breadcrumb: ["Tables", "Data Tables"], header: {title: "Data Tables", info: "advanced tables"} } },
      // Calendar, Mailbox
      { path: 'calendar', component: CalendarComponent,
        data: { breadcrumb: "Calendar", header: {title: "Calendar", info: "Control panel"} } },
      { path: 'mailbox', component: MailboxComponent,
        // TODO:  template for message: 13 new messages
        data: { breadcrumb: "Mailbox", header: {title: "Mailbox", info: "13 new messages"} } },
      // Examples
      { path: 'blackpage', component: BlankPageComponent,
        data: { breadcrumb: "Black Page", header: {title: "Blank page", info: "it all starts here"} } },
      { path: 'searchpage', component: SearchResultComponent,
        data: { breadcrumb: "Search Page", header: {title: "Search Page", info: "search..."} } },
      // Documentation
      { path: 'documentation', component: DocumentationComponent,
        data: { breadcrumb: "Documentation", header: {title: "Documentation", info: ""} } }
    ]},
  { path: '**', component: DashboardComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
