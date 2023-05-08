import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postMethod(url: string, payload: {}, token: boolean, httpOption: any) {
    return this.http.post(url, payload, token && httpOption)
  }
  
}
