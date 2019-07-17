import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private http: HttpClient) {
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>{

      if(await this.loginService.checkLogin()){
        this.router.navigate(['/index']);
        return false;
      } else {
        return true;
      }

    }
}
