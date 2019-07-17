import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterStateSnapshot, Router } from '@angular/router';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient, private router: Router) { }

  logout(){
    this.http.get("http://localhost:5000/api/logout",{ withCredentials: true }).toPromise().then(
      x =>{
        this.router.navigate(['/home']);
      });
  }
}
