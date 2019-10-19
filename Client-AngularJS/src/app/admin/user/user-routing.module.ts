import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisteredComponent } from './registered/registered.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionReportComponent } from './session-report/session-report.component';
import { UserComponent } from './user.component'
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path:'',
  component: UserComponent,
  children:[
    {
      path: 'registered',
      component: RegisteredComponent,
    },
    {
      path: 'sessions-list',
      component: SessionsListComponent,
    },
    {
      path: 'session-report',
      component: SessionReportComponent,
    },
    {
      path: '',
      redirectTo: 'registered',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
