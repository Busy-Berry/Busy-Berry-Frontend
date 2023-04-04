import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { internalMeeting } from './InternalMeeting/internal_meeting';
@NgModule({
  declarations: [internalMeeting],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [internalMeeting],
})
export class AppModule {}
