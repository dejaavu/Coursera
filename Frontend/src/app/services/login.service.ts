import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(form){
    return this.http.post("http://localhost:5000/api/login",form.value,{ withCredentials:true });
  }

  async checkLogin(){
    const object = await this.http.get("http://localhost:5000/api",{ withCredentials:true }).toPromise();
    return object["status"];
  }

  async checkLevel(){
    const object = await this.http.get("http://localhost:5000/api",{ withCredentials:true }).toPromise();
    return object["userlevel"] == 'admin';
  }
}
