import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbIconModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';

import { AppTitleService } from '../services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from '../services/app-translation.service';
import { ConfigurationService } from '../services/configuration.service';
import { AlertService } from '../services/alert.service';
import { ThemeManager } from '../services/theme-manager';
import { LocalStoreManager } from '../services/local-store-manager.service';
import { AuthStorage } from '../services/auth-storage';
import { NotificationService } from '../services/notification.service';
import { NotificationEndpoint } from '../services/notification-endpoint.service';
import { AccountService } from '../services/account.service';
import { AccountEndpoint } from '../services/account-endpoint.service';

import { MiscellaneousModule } from '../admin/miscellaneous/miscellaneous.module'

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { BranchInComponent } from './branch-in/branch-in.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, PasswordResetComponent, BranchInComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbAuthModule,
    NbIconModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    OAuthModule.forRoot(),
    MiscellaneousModule,
  ],
  providers: [
    { provide: OAuthStorage, useClass: AuthStorage },
    AlertService,
    ThemeManager,
    ConfigurationService,
    AppTitleService,
    AppTranslationService,
    NotificationService,
    NotificationEndpoint,
    AccountService,
    AccountEndpoint,
    LocalStoreManager
  ],
})
export class AuthModule { }
