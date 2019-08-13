import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  getsubs(){
    return this.http.get("http://localhost:5000/api/subscription", { withCredentials: true });
  }

  addSub(id){
    return this.http.post("http://localhost:5000/api/subscription/"+id, { withCredentials: true });
  }

  removeSub(id){
    return this.http.delete("http://localhost:5000/api/subscription/"+id, { withCredentials: true });
  }

  getSubById(id){
    return this.http.get("http://localhost:5000/api/subscription/"+id, { withCredentials: true });
  }
}
