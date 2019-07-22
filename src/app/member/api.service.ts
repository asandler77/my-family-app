import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { MemberPersonInterface } from './memberPersonInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  getNameFromDB(): Observable<MemberPersonInterface[]> {
    return this.httpClient.get<MemberPersonInterface[]>(environment.apiUrl);
  }
}
