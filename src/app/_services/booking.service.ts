import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookingService {
      baseUrl: string = 'http://localhost:33699/api/booking/'

    constructor(private _http: Http) { }

    getBookings(){
      return this._http.get(this.baseUrl + 'getbookings')
                .map((response: Response) =>response.json())
                .catch(this._errorHandler);
    }

    getBookingById(id){
      return this._http.get(this.baseUrl +"GetBookingById/"+ id)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    saveBooking(booking){
      return this._http.post(this.baseUrl +   'savebooking', booking)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    deleteBooking(id){
      return this._http.delete(this.baseUrl + "DeleteBooking/" + id)
                .map((response:Response) =>  response.json())
                .catch(this._errorHandler)
    }

    _errorHandler(error:Response){debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
}
