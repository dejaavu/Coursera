import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';    

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(form){
    return this.http.post("http://localhost:5000/api/login",form.value,{ });
  }

  async checkLogin(){
    const result = await this.http.get("http://localhost:5000/api").toPromise();
    return result["status"];
  }
}
