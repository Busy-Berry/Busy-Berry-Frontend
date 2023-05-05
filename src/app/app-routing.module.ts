import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { internalMeeting } from './InternalMeeting/internal_meeting';

import { homeComponent } from './Home/home';
const routes: Routes = [
  { path: '', component: homeComponent },
  { path: 'meeting', component: internalMeeting },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
