import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  REST_API: string = 'https://newsapi.org/v2/top-headlines?country=eg&apiKey=22253b165ae042c3aaf0675a4236b421';
  HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  getegyptenews(): Observable<any> {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    const qInTitle = "";
    const from = "tunisia";
    const apiKey = "22253b165ae042c3aaf0675a4236b421";
    const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
    const request = new Request(url);

    let API_URL = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=eg&apiKey=${apiKey}`;
    return this.httpClient.get(API_URL, { headers: this.HttpHeaders }).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
/* 
const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const qInTitle = "";
const from = "";
const apiKey = "";
const url = `${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}language=en&apiKey=${apiKey}`;
const request = new Request(url);

fetch(request)
  .then(response => response.json())
  .then((news) => {
    console.log(news);
  })
  .catch(error => {
    console.log(error);
  });
   */