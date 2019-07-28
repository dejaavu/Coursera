import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class SuperadminGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>{

      if(await this.loginService.checkSuperAdmin()){
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }

    }
}
