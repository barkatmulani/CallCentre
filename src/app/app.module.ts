import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './components/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { TableComponent } from './components/table/table.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { mockData } from './mock/mock.data';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [AppComponent, {provide: MatDialogRef, useValue: {}}, mockData],
  entryComponents: [CustomerComponent],
  bootstrap: [AppComponent],
  exports: [
    MatDatepickerModule
  ]
})
export class AppModule { }
