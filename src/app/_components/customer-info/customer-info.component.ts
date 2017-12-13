import 'rxjs/add/operator/switchMap'
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CustomerService } from '../../_services/customer.service';
import { Customer } from '../../_models/customer';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;

    constructor(
      private customerService: CustomerService,
      private route: ActivatedRoute,
      private location: Location
    ) { }

    ngOnInit(): void {
      this.route.params.switchMap((params: Params) => this.customerService.getCustomerById(+params['id']))
        .subscribe(customer => this.customer = customer);
    }
    updateCustomer(): void {
      this.customerService.updateCustomer(this.customer);
      this.goBack();
    }
    goBack(): void {
      this.location.back();
    }

  }
