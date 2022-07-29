import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {PageInfoComponent} from "./page-info/page-info.component";
import {RowComponent} from "./row/row.component";
import {ListComponent} from "./list/list.component";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormAiportComponent} from "./pages/form-aiport/form-aiport.component";

@NgModule({
  declarations: [
    AppComponent,
    PageInfoComponent,
    RowComponent,
    ListComponent,
    FormAiportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
