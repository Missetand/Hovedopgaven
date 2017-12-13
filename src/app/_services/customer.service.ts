import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Customer } from '../_models/customer';


@Injectable()
export class CustomerService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private customerBaseUrl: string = 'http://localhost:53159/api/customer';

    constructor(private http: Http) { }

    getCustomers(): Promise<Customer[]> {
      return this.http.get(this.customerBaseUrl)
      .toPromise()
      .then(response => response.json().data as Customer[])
      .catch(this.handleError);
    }

    getCustomerById(id: number): Promise<Customer> {
      const url = `${this.customerBaseUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Customer)
        .catch(this.handleError);
  }

    createCustomer(customer): Promise<Customer> {
      return this.http
      .post(this.customerBaseUrl, JSON.stringify(customer), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Customer)
      .catch(this.handleError);
  }

    updateCustomer(customer: Customer): Promise<Customer> {
      const url = `${this.customerBaseUrl}/${customer.id}`;
      return this.http
        .put(url, JSON.stringify(customer), { headers: this.headers })
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
    }

    deleteCustomer(customer: Customer): Promise<void> {
      const url = `${this.customerBaseUrl}/${customer.id}`;
      return this.http.delete(url, { headers: this.headers })
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
  }
