import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isadmin: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public isSUadmin: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  load1(){
    this.http.get("http://localhost:5000/api",{ withCredentials:true }).toPromise().then(
      info => {
        this.isadmin.next(info["userlevel"] == 'admin');
      }
    );
  }

  load2(){
    this.http.get("http://localhost:5000/api",{ withCredentials:true }).toPromise().then(
      info => {
        this.isSUadmin.next(info["userlevel"] == 'suadmin');
      }
    );
  }

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

  async checkSuperAdmin(){
    const object = await this.http.get("http://localhost:5000/api",{ withCredentials:true }).toPromise();
    return object["userlevel"] == 'suadmin';
  }
}
