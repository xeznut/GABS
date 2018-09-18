import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './shared/ui/loading.component';
import { LoadingDirective } from './shared/ui/loading.directive';

import { AppSettings } from './app.settings';
import { LoadingService } from './shared/loading.service';

import { LoginComponent } from './other/login.component';
import { EnumUtils } from './shared/enums';

import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FileSelectDirective } from 'ng2-file-upload';

import { routingImports } from './app.routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconRegistry,
  MatPaginatorIntl
} from '@angular/material';
import { LockListComponent } from './lock-list/lock-list.component';
import { LockFormComponent } from './lock-form/lock-form.component';
import { AppDialogComponent } from './shared/ui/app-dialog.component';
import { MatPaginatorIntlCro } from './shared/ui/matPaginatorIntlCroClass';
import { WhiteListComponent } from './white-list/white-list.component';
import { LockSitesListComponent } from './lock-sites-list/lock-sites-list.component';

export function initConfig(config: AppSettings) { return () => config.load(); }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    LoadingDirective,
    LockListComponent,
    LockFormComponent,
    AppDialogComponent,
    WhiteListComponent,
    LockSitesListComponent,
    FileSelectDirective
  ],
  entryComponents: [AppDialogComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    routingImports,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFileUploaderModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    EnumUtils,
    LoadingService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/fonts/mdi.svg'));
  }
}
