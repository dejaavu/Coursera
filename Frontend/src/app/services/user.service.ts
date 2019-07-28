import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  submit(form){
    return this.http.put('http://localhost:5000/api/user', form, { withCredentials: true });
  }

  getinfo(){
    return this.http.get('http://localhost:5000/api/user', { withCredentials: true });
  }

  getinfobyemail(email){
    return this.http.get('http://localhost:5000/api/user/' + email, { withCredentials: true });
  }
}
