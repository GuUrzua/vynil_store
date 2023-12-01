import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { AuthenticationResponse, UserCreationRequest, UserLoginRequest } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public authenticate(request: UserLoginRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${environment.apiUrl}/auth/authenticate`, request)
  }

  public createUser(request: UserCreationRequest) {
    return this.http.post(`${environment.apiUrl}/auth/register`, request);
  }
}
