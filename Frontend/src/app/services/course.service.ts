import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  addCourse(form){
    return this.http.post("http://localhost:5000/api/courses" ,form ,{ withCredentials: true });
  }

  removeCourse(id){
    return this.http.delete("http://localhost:5000/api/courses/"+id ,{ withCredentials: true });
  }

  updateCourse(id, form){
    return this.http.put("http://localhost:5000/api/courses/"+id, form ,{ withCredentials: true });
  }

  getCourseByUploader(){
    return this.http.get("http://localhost:5000/api/courses/",{ withCredentials: true });
  }

  getCourseById(id){
    return this.http.get("http://localhost:5000/api/courses/"+id,{ withCredentials: true });
  }
}
