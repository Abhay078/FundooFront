import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.baseUrl

  constructor(private httpService: HttpService) { }

  registration(data: {}) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postMethod(this.baseUrl + 'User/Register', data, false, headers)
  }
  login(data: {}) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postMethod(this.baseUrl + 'User/Login', data, false, headers)
  }
  
forget(data: string) {
  let headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  return this.httpService.postMethod(this.baseUrl+`User/ForgetPassword?email=${data}`,{},false,headers)
}

reset(data: string) {
  let headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })

  }
  return this.httpService.postMethod(this.baseUrl + 'User/ResetPassword', data, true, headers)
}

}
