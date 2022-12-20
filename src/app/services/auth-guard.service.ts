import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,
    private loginService: LoginService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if(!this.loginService.isUserLoggedIn()){
      alert("Login dulu dong !!");
      this.router.navigate(['login'], {queryParams: {lastURL: route.url}});
      return false;
    }
    return true;
  }
}
