import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { internalMeeting } from './InternalMeeting/internal_meeting';
import { HttpClientModule } from '@angular/common/http';
import { sidebar } from './SideBar/sidebar';
import { header } from './Header/header';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [internalMeeting, sidebar, header],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [internalMeeting],
})
export class AppModule {}
