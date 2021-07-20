import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './pages/map/map.component';
import { TableComponent } from './pages/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NewDataDialogComponent } from './pages/new-data-dialog/new-data-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataInfoDialogComponent } from './pages/data-info-dialog/data-info-dialog.component';
import { HttpConfigInterceptor } from './shared/services/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TableComponent,
    HomeComponent,
    NewDataDialogComponent,
    DataInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
