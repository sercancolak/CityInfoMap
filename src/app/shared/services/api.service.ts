import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }
  get(path: string): Observable<any> {
    return this.httpClient.get(path).pipe(catchError(this.formatError));
  }

  getWithParams(path: string, params: HttpParams): Observable<any> {
    return this.httpClient.get(path, { params }).pipe(catchError(this.formatError));
  }

  post(path: string, body: any): Observable<any> {
    return this.httpClient.post(path, body).pipe(catchError(this.formatError));
  }

  put(path: string, body: any): Observable<any> {
    return this.httpClient.put(path, body).pipe(catchError(this.formatError));
  }

  delete(path: string): Observable<any> {
    return this.httpClient.delete(path).pipe(catchError(this.formatError));
  }

  private formatError(path: string, error: any) {
    return of(error.error);
  }
}