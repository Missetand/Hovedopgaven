import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../_services/index';
import { Customer } from 'app/_models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  selectedCustomer: Customer;
  newCustomer: Customer;

  constructor( private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customerService.getCustomers().then(customers => this.customers = customers);
    this.newCustomer = new Customer();
  }

  createCustomer(customer: Customer): void {

    this.customerService.createCustomer(customer)
      .then(customer => {
        this.customers.push(customer);
        this.selectedCustomer = null;
      });
  }

  deleteCustomer(customer: Customer): void {
    this.customerService
      .deleteCustomer(customer)
      .then(() => {
        this.customers = this.customers.filter(c => c !== customer);
        if (this.selectedCustomer === customer) { this.selectedCustomer = null; }
      });
  }
}
