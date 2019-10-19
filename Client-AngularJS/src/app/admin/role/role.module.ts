import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { RoleRoutingModule } from './role-routing.module';


import { RoleComponent } from './role.component';

import { DialogNamePromptComponent } from './role-edit-dialog/role-edit-dialog';

import { AccountService } from '../../services/account.service';

import { GroupByPipe } from '../../pipes/group-by.pipe';

const COMPONENTS = [
  RoleComponent,
  DialogNamePromptComponent,
  GroupByPipe,
];

const ENTRY_COMPONENTS = [
  RoleComponent,
  DialogNamePromptComponent,
];

const MODULES = [
  CommonModule,
  RoleRoutingModule,
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
  ReactiveFormsModule,
];

const SERVICES = [
  AccountService,
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
export class RoleModule { }
