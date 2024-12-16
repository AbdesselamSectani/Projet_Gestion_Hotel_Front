import { Injectable } from '@angular/core';
import { ReservationServiceClient } from '../grpc/ReservationServiceClientPb';
import { Observable } from 'rxjs';
import { ReservationByIdRequest, ReservationResponse } from '../grpc/reservation_pb';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private client: ReservationServiceClient;

  constructor() { 
    // Create an instance of the gRPC client
    this.client = new ReservationServiceClient('http://localhost:9090');
  }

  getReservation(id: number): Observable<ReservationResponse> {
    return new Observable<ReservationResponse>((observer) => {
      const request = new ReservationByIdRequest();
      request.setId(id); // Assuming 'setId' is a setter in your generated Protobuf class

      // Call the gRPC method
      this.client.getReservationById(request, {}, (err, response) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(response);
        }
        observer.complete();
      });
    });
  }

}
