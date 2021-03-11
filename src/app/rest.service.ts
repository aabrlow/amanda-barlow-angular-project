import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService
  ) { }

  
  logIn(body): Promise<any> {
    return this.http
      .post(`${environment.apiUrl}/log-in`, body)
      .toPromise(); 
  }

  getInventory(): Promise<any> {
    const jwt = this.jwtService.getJwt();

    return this.http
      .get(
        `${environment.apiUrl}/inventory`, 
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise()
  }

  addInventory(body){
    const jwt = this.jwtService.getJwt();

    return this.http
    .put(`${environment.apiUrl}/inventory`, body, {
      headers: {
        Authorization: `Bearer ${jwt}`, 'Access-Control-Allow-Origin': '*',
      },
    })
    .toPromise();
}
}


