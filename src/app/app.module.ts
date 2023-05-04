import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { internalMeeting } from './InternalMeeting/internal_meeting';
import { HttpClientModule } from '@angular/common/http';
import { sidebar } from './SideBar/sidebar';
import { header } from './Header/header';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { homeComponent } from './Home/home';
import { NgChartsModule } from 'ng2-charts';
import { AnilloComponent } from './Graph/Ring/graph_ring';
@NgModule({
  declarations: [
    internalMeeting,
    sidebar,
    header,
    homeComponent,
    AnilloComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [homeComponent],
})
export class AppModule {}
