import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbTreeGridModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbDatepickerModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { UserRoutingModule } from './user-routing.module';

import { UserEditDialogComponent } from './registered/user-edit-dialog/user-edit-dialog.component';
import { RegisteredComponent } from './registered/registered.component';
import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionReportComponent } from './session-report/session-report.component';
import { UserComponent } from './user.component';

const COMPONENTS = [
  UserComponent,
  UserEditDialogComponent,
  RegisteredComponent,
  SessionsListComponent,
  SessionReportComponent,
];

const ENTRY_COMPONENTS = [
  UserComponent,
  UserEditDialogComponent,
  RegisteredComponent,
  SessionsListComponent,
  SessionReportComponent,
];

const MODULES = [
  CommonModule,
  UserRoutingModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbSelectModule,
  NbTooltipModule,
  NbMenuModule,
  ThemeModule,
  CommonModule,
  MiscellaneousModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  Ng2SmartTableModule,
  FormsModule,
  NbDatepickerModule,
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class UserModule { }
