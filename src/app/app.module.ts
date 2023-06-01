import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { internalMeeting } from './InternalMeeting/internal_meeting';
import { HttpClientModule } from '@angular/common/http';
import { sidebar } from './SideBar/sidebar';
import { header } from './Header/header';
import { homeComponent } from './Home/home';
import { NgChartsModule } from 'ng2-charts';
import { AnilloComponent } from './Graph/Ring/graph_ring';
import { appComponent } from './app-component';
import { login } from './LogIn/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { register } from './Register/register';
import { forgot } from './ForgotPassword/forgot';
import { confirm } from './ConfirmUser/confirm';
import { searchScreenComponent } from './Search/search';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    internalMeeting,
    sidebar,
    header,
    homeComponent,
    AnilloComponent,
    appComponent,
    login,
    register,
    forgot,
    confirm,
    searchScreenComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbModule,
    NgbAlertModule,
    JsonPipe,
  ],
  providers: [],
  bootstrap: [appComponent],
})
export class AppModule {}
