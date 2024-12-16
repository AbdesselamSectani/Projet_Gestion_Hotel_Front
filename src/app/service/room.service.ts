import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:8888/chambre-service/chambres';

  constructor(private http: HttpClient) { }

  getAllChambres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
