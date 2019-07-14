import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  login;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      if(this.loginService.checkLogin()){
        return true;
      } else {
        return this.router.createUrlTree(['/home'],{ queryParams: { returnTo: state.url } });
      }

    }

}
