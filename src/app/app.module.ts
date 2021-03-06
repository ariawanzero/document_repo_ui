import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { BlockUIModule } from 'ng-block-ui';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ConfirmationDialogComponent } from './shared/component/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './shared/service/confirmation-dialog.service';

import { MessageComponent } from './shared/component/message/message.component';
import { GlobalMessageService  } from './shared/service/global-message.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    SharedModule,

    LoginModule,

    BlockUIModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    MessageComponent
  ],
  providers: [
    ConfirmationDialogService,
    GlobalMessageService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
