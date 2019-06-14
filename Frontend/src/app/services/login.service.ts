import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(form){
    return this.http.post("http://localhost:5000/api/login",form.value,{ });
  }
}
