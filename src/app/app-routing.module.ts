import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { internalMeeting } from './InternalMeeting/internal_meeting';

import { homeComponent } from './Home/home';
import { login } from './LogIn/login';
import { register } from './Register/register';
import { forgot } from './ForgotPassword/forgot';
import { searchScreenComponent } from './Search/search';
const routes: Routes = [
  { path: '', component: login },
  { path: 'register', component: register },
  { path: 'confirm', component: register },
  { path: 'forgot', component: forgot },
  { path: 'home', component: homeComponent },
  { path: 'search', component: searchScreenComponent },
  { path: 'meeting', component: internalMeeting },
  { path: 'config', component: internalMeeting },
  { path: 'calendar', component: internalMeeting },
  { path: 'stats', component: internalMeeting },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
