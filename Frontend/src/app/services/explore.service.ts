import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private http: HttpClient) { }

  getcourse(id){
    return this.http.get('http://localhost:5000/api/courses/'.concat(id), { withCredentials: true });
  }

}
