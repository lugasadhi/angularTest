import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

export interface alldata {result: string;}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _global:GlobalService,
    private route:Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var token = this._global.getLocalStorage("token");
    if(token == undefined){

      this.route.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }


}
