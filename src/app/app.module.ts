import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookingsComponent, CustomerListComponent,
CustomersComponent, DashboardComponent, LoginComponent,
NavComponent, NewBookingComponent } from './_components/index';

import { OrderByPipe, SearchPipe } from './_pipes/index';

import { CustomerService, BookingService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    CustomersComponent,
    NewBookingComponent,
    BookingsComponent,
    CustomerListComponent,
    SearchPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
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
