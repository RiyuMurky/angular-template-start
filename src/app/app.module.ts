import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    SidebarUserPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
