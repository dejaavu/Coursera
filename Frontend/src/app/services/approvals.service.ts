import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {

  constructor(private http: HttpClient) { }

  addCourse(form){
    return this.http.post("http://localhost:5000/api/approvals" ,form ,{ withCredentials: true });
  }

  removeCourse(id){
    return this.http.delete("http://localhost:5000/api/approvals/"+id ,{ withCredentials: true });
  }

  getApproval(){
    return this.http.get("http://localhost:5000/api/approvals/",{ withCredentials: true });
  }

}
