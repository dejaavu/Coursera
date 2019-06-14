import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  register(form){
    return this.http.post("http://localhost:5000/api/register",form.value,{ });
  }
  
}
