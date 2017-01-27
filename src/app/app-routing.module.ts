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
    data: { breadcrumb: {label:"Home", icon:"home"} },
    children: [
      // RedirectTo
      { path: '', redirectTo: 'dashboardv1', pathMatch: 'full' },
      // Dashboard
      { path: 'dashboardv1', component: DashboardV1Component,
        data: { breadcrumb: [{label:"Dashboard", icon:"dashboard "}],
                header: {title: "Dashboard", info: "Control panel"} } },
      { path: 'dashboardv2', component: DashboardV2Component,
        data: { breadcrumb: [{label:"Dashboard", icon:"dashboard "}],
                header: {title: "Dashboard", info: "Version 2.0"} } },
      // Layout options
      { path: 'layoutoptions', component: LayoutOptionsComponent,
        data: { breadcrumb: {label:"Layout Options", icon:"files-o"},
                header: {title: "Layout", info: "Layout Options"} } },
      // Widgets
      { path: 'widgets', component: WidgetsComponent,
        data: { breadcrumb: {label:"Widgets", icon:"th"},
                header: {title: "Widgets", info: "Preview page"} } },
      { path: 'charts', component: ChartsComponent,
        data: { breadcrumb: {label:"Charts", icon:"pie-chart"},
                header: {title: "Charts", info: "Preview sample"} } },
      // UI Elements
      { path: 'uielementsgeneral', component: UiElementsGeneralComponent,
        data: { breadcrumb: [{label:"UI", icon:"laptop"}, {label:"General", icon:"circle-o"}],
                header: {title: "General UI", info: "Preview of UI elements"} } },
      { path: 'uielementsicons', component: UiElementsIconsComponent,
        data: { breadcrumb: [{label:"UI", icon:"laptop"}, {label:"Icons", icon:"circle-o"}],
                header: {title: "Icons", info: "a set of beautiful icons"} } },
      { path: 'uielementsbuttons', component: UiElementsButtonsComponent,
        data: { breadcrumb: [{label:"UI", icon:"laptop"}, {label:"Buttons", icon:"circle-o"}],
                header: {title: "Buttons", info: "Control panel"} } },
      { path: 'uielementssliders', component: UiElementsSlidersComponent,
        data: { breadcrumb: [{label:"UI", icon:"laptop"}, {label:"Sliders", icon:"circle-o"}],
                header: {title: "Sliders", info: "range sliders"} } },
      { path: 'uielementstimeline', component: UiElementsTimelineComponent,
        data: { breadcrumb: [{label:"UI", icon:"laptop"}, {label:"Timeline", icon:"circle-o"}],
                header: {title: "Timeline", info: "example"} } },
      { path: 'uielementsmodals', component: UiElementsModalsComponent,
        data: { breadcrumb: [{label:"UI", icon:"laptop"}, {label:"Modals", icon:"circle-o"}],
                header: {title: "Modals", info: "new"} } },
      // Forms
      { path: 'formsgeneral', component: FormsGeneralElementsComponent,
        data: { breadcrumb: [{label:"Forms", icon:"edit"}, {label:"General", icon:"circle-o"}],
                header: {title: "General Form Elements", info: "Preview"} } },
      { path: 'formsadvanced', component: FormsAdvancedElementsComponent,
        data: { breadcrumb: [{label:"Forms", icon:"edit"}, {label:"Advanced", icon:"circle-o"}],
                header: {title: "Advanced Form Elements", info: "Preview"} } },
      { path: 'formseditors', component: FormsEditorsComponent,
        data: { breadcrumb: [{label:"Forms", icon:"edit"}, {label:"Editors", icon:"circle-o"}],
                header: {title: "Text Editors", info: "Advanced form element"} } },
      // Tables
      { path: 'simpletables', component: SimpleTablesComponent,
        data: { breadcrumb: [{label:"Tables", icon:"table"}, {label:"Simple Tables", icon:"circle-o"}],
                header: {title: "Simple Tables", info: "preview of simple tables"} } },
      { path: 'datatables', component: DataTablesComponent,
        data: { breadcrumb: [{label:"Tables", icon:"table"}, {label:"Data Tables", icon:"circle-o"}],
                header: {title: "Data Tables", info: "advanced tables"} } },
      // Calendar, Mailbox
      { path: 'calendar', component: CalendarComponent,
        data: { breadcrumb: {label:"Calendar", icon:"calendar"},
                header: {title: "Calendar", info: "Control panel"} } },
      { path: 'mailbox', component: MailboxComponent,
        // TODO:  template for message: 13 new messages
        data: { breadcrumb: {label:"Mailbox", icon:"envelope"},
                header: {title: "Mailbox", info: "13 new messages"} } },
      // Examples
      { path: 'blackpage', component: BlankPageComponent,
        data: { breadcrumb: {label:"Black Page", icon:"circle-o"},
                header: {title: "Blank page", info: "it all starts here"} } },
      { path: 'searchpage', component: SearchResultComponent,
        data: { breadcrumb: {label:"Search Page", icon:"search"},
                header: {title: "Search Page", info: "search..."} } },
      // Documentation
      { path: 'documentation', component: DocumentationComponent,
        data: { breadcrumb: {label:"Documentation", icon:"book"},
                header: {title: "Documentation", info: ""} } }
    ]},
  { path: '**', component: DashboardComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
