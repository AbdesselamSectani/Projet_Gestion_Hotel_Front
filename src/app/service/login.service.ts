import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8085/login';

  constructor(private http : HttpClient) { }

  public login(email: string, password: string):Observable<any>{
    const body = {
      "email": email,
      "password": password
    }
    return this.http.post<any>(this.apiUrl, body);
  }

  public getUser(email: string):Observable<any>{
    return this.http.get<any>(`http://localhost:8888/user-service/Utilisateurs/email/${email}`);
  }

}
