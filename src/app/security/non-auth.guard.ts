import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(
    private _global:GlobalService,
    private auth:AuthService,
    private route:Router,
  ) {}
checkAuthLogin
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let token = this._global.getLocalStorage("token");

    if(token == undefined){
      this._global.changeLoading(true);
      this.auth.getLoggedInUser().subscribe(x =>{
        this._global.changeLoading(false);

        if( x == null){
          console.log('accesable');
          return true;
        }else{
          this._global.setLocalStorage("token",x.refreshToken);
          this._global.setLocalStorage("userdata",x);
          this.route.navigate(['/dashboard']);
        }
      });
      return true;
    }else{
      return false;
    }
  }


}
