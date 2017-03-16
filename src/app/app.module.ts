import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes, CanActivate,CanDeactivate } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DataTableModule } from "angular2-datatable";

import { StateService } from './shared/services/state.service';
import { EventsService } from './shared/services/events.service';
import { UserService } from './shared/services/user.service';
import { WidgetExchangeService } from './shared/services/widget-exchange.service';
import { HeaderExchangeService } from './shared/services/header-exchange.service';
import { QuickSearchService } from './shared/services/quick-search.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { BreadcrumbService } from './shared/services/breadcrumb.service';
import { ContentHeaderService } from './shared/services/content-header.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarStaticTopComponent } from './dashboard/main-header/navbar-static-top/navbar-static-top.component';
import { MessagesMenuComponent } from './dashboard/main-header/navbar-static-top/messages-menu/messages-menu.component';
import { NotificationsMenuComponent } from './dashboard/main-header/navbar-static-top/notifications-menu/notifications-menu.component';
import { TasksMenuComponent } from './dashboard/main-header/navbar-static-top/tasks-menu/tasks-menu.component';
import { UserMenuComponent } from './dashboard/main-header/navbar-static-top/user-menu/user-menu.component';
import { MainHeaderComponent } from './dashboard/main-header/main-header.component';
import { MainSidebarComponent } from './dashboard/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './dashboard/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './dashboard/main-footer/main-footer.component';
import { ControlSidebarComponent } from './dashboard/control-sidebar/control-sidebar.component';
import { SidebarSearchFormComponent } from './dashboard/main-sidebar/sidebar-search-form/sidebar-search-form.component';
import { SidebarMenuComponent } from './dashboard/main-sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarUserPanelComponent } from './dashboard/main-sidebar/sidebar-user-panel/sidebar-user-panel.component';
import { DashboardV1Component } from './pages/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './pages/dashboard-v2/dashboard-v2.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { BreadcrumbComponent } from './shared/widgets/breadcrumb/breadcrumb.component';
import { LayoutOptionsComponent } from './pages/layout-options/layout-options.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { UiElementsGeneralComponent } from './pages/ui-elements-general/ui-elements-general.component';
import { UiElementsIconsComponent } from './pages/ui-elements-icons/ui-elements-icons.component';
import { UiElementsButtonsComponent } from './pages/ui-elements-buttons/ui-elements-buttons.component';
import { UiElementsSlidersComponent } from './pages/ui-elements-sliders/ui-elements-sliders.component';
import { UiElementsTimelineComponent } from './pages/ui-elements-timeline/ui-elements-timeline.component';
import { UiElementsModalsComponent } from './pages/ui-elements-modals/ui-elements-modals.component';
import { FormsGeneralElementsComponent } from './pages/forms-general-elements/forms-general-elements.component';
import { FormsAdvancedElementsComponent } from './pages/forms-advanced-elements/forms-advanced-elements.component';
import { FormsEditorsComponent } from './pages/forms-editors/forms-editors.component';
import { SimpleTablesComponent } from './pages/simple-tables/simple-tables.component';
import { DataTablesComponent } from './pages/data-tables/data-tables.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { WpSmallBoxComponent } from './shared/widgets/wp-small-box/wp-small-box.component';
import { WpInfoBoxComponent } from './shared/widgets/wp-info-box/wp-info-box.component';
import { WpDirectChatComponent } from './shared/widgets/wp-direct-chat/wp-direct-chat.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { WpSocialUserV1Component } from './shared/widgets/wp-social-user-v1/wp-social-user-v1.component';
import { WpSocialUserV2Component } from './shared/widgets/wp-social-user-v2/wp-social-user-v2.component';
import { WpSocialTapeComponent } from './shared/widgets/wp-social-tape/wp-social-tape.component';
import { ContentHeaderComponent } from './shared/widgets/content-header/content-header.component';
import { ClockMenuComponent } from './dashboard/main-header/navbar-static-top/clock-menu/clock-menu.component';

// const appRoutes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
// ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarStaticTopComponent,
    MessagesMenuComponent,
    NotificationsMenuComponent,
    TasksMenuComponent,
    UserMenuComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    SidebarSearchFormComponent,
    SidebarMenuComponent,
    SidebarUserPanelComponent,
    DashboardV1Component,
    DashboardV2Component,
    BlankPageComponent,
    BreadcrumbComponent,
    LayoutOptionsComponent,
    WidgetsComponent,
    ChartsComponent,
    UiElementsGeneralComponent,
    UiElementsIconsComponent,
    UiElementsButtonsComponent,
    UiElementsSlidersComponent,
    UiElementsTimelineComponent,
    UiElementsModalsComponent,
    FormsGeneralElementsComponent,
    FormsAdvancedElementsComponent,
    FormsEditorsComponent,
    SimpleTablesComponent,
    DataTablesComponent,
    CalendarComponent,
    MailboxComponent,
    DocumentationComponent,
    WpSmallBoxComponent,
    WpInfoBoxComponent,
    WpDirectChatComponent,
    SearchResultComponent,
    WpSocialUserV1Component,
    WpSocialUserV2Component,
    WpSocialTapeComponent,
    ContentHeaderComponent,
    ClockMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule,
    DataTableModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StateService,
    UserService,
    EventsService,
    // Exchange
    WidgetExchangeService,
    HeaderExchangeService,
    QuickSearchService,
    BreadcrumbService,
    ContentHeaderService,
    // Auth
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
