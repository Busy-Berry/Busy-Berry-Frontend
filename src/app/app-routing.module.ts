import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { internalMeeting } from './InternalMeeting/internal_meeting';

import { homeComponent } from './Home/home';
import { login } from './LogIn/login';
import { register } from './Register/register';
import { forgot } from './ForgotPassword/forgot';
const routes: Routes = [
  { path: '', component: login },
  { path: 'register', component: register },
  { path: 'forgot', component: forgot },
  { path: 'home', component: homeComponent },
  { path: 'meeting', component: internalMeeting },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
