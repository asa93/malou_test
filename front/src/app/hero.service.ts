import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  apiUrl = "http://localhost:3020";
  constructor(private http: HttpClient,) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts (afterDate,beforeDate): Observable<""> {
    return this.http.get<"">(this.apiUrl+"/getProducts?afterDate="+afterDate+"&beforeDate="+beforeDate)
    .pipe(
      catchError(this.handleError<"">('getHeroes', ""))
    );
  }

 
}
