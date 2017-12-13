import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookingsComponent, CustomerListComponent,
DashboardComponent, LoginComponent,
NavComponent, NewBookingComponent } from './_components/index';

import { OrderByPipe, SearchPipe } from './_pipes/index';

import { CustomerService, BookingService } from './_services/index';
import { CustomerInfoComponent } from './_components/customer-info/customer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    NewBookingComponent,
    BookingsComponent,
    CustomerListComponent,
    SearchPipe,
    OrderByPipe,
    CustomerInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CustomerService,
    BookingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
