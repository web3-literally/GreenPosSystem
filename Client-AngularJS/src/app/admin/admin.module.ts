import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { AdminRoutingModule } from './admin-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { AdminComponent } from './admin.component';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

import { AccountService } from '../services/account.service';


const COMPONENTS = [
  AdminComponent
];

const ENTRY_COMPONENTS = [
  AdminComponent,
];

const MODULES = [
  NbMenuModule,
  ThemeModule,
  CommonModule,
  AdminRoutingModule,
  MiscellaneousModule,
  UserModule,
  RoleModule,
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
export class AdminModule { }
