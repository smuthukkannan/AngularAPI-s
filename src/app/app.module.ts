import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/home.component';
import { AppContactComponent } from './contact/contact.component';
import { ConfirmationDialogLeavePage } from './confirmation-dialog-leavepage/confirmation-dialog-leavepage.component';

import { DeactivateGuardService } from './cancomponentdeactivate';

@NgModule({
  declarations: [
    AppComponent , AppHomeComponent , AppContactComponent, ConfirmationDialogLeavePage
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule,MatDialogModule
  ],
  providers: [DeactivateGuardService],
  entryComponents: [ ConfirmationDialogLeavePage ],
  bootstrap: [AppComponent]
})
export class AppModule { }
