import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { MemberPersonInterface } from './memberPersonInterface';
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private httpClient: HttpClient) { }
  getMembersFromDB(): Observable<MemberPersonInterface[]> {
    return this.httpClient.get<MemberPersonInterface[]>(environment.apiUrl);
  }

  setMeberInDb(member: MemberPersonInterface): Observable<MemberPersonInterface> {
    return this.httpClient
      .post<MemberPersonInterface>(environment.apiUrl, member, this.httpOptions);
  }

  deleteAllUsers() {
    return this.httpClient.delete(environment.apiUrl);
  }

  deleteUser(_id: string) {
    const url = `${environment.apiUrl}/${_id}`; // DELETE api/heroes/42

    return this.httpClient.delete(url);
  }
}
