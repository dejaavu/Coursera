import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userinfo: BehaviorSubject<any> = new BehaviorSubject<any>({name: 'USER'});

  constructor(private http: HttpClient) {
  }

  load(){
    this.getinfo().then(
      info => {
        this.userinfo.next(info);
      }
    );
  }

  submit(form){
    return this.http.put('http://localhost:5000/api/user', form, { withCredentials: true });
  }

  async getinfo(){
    return this.http.get('http://localhost:5000/api/user', { withCredentials: true }).toPromise();
  }

  getinfobyemail(email){
    return this.http.get('http://localhost:5000/api/user/' + email, { withCredentials: true });
  }
}
