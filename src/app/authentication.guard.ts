import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardServiceService } from 'src/services/AuthService/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}

  canActivate():boolean{
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken(); 
    
  }
  
}
