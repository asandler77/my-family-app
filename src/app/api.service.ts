import { Injectable } from '@angular/core';
import { environment} from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getNameFromDB(): Observable<any> {
    return this.httpClient.get(environment.apiUrl);
  }
}
