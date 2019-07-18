import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) { }

  getcourses(branch){
    return this.http.get('http://localhost:5000/api/courses?branch='+branch, { withCredentials: true });
  }
}
