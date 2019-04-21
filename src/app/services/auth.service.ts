import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth:AngularFireAuth,
    private _global:GlobalService,
    private route:Router,
    ) { 
    
    }

    isAuth(){
      return !!this._global.getLocalStorage("token");
    }

    googleLogin(){
      this._global.changeLoading(true);
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider).then(()=>{
        this._global.changeLoading(false);
      });
    }
    
    facebookLogin(){
      this._global.changeLoading(true);
      this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider).then(()=>{
        this._global.changeLoading(false);
      });
    }

    logout(){
      this.afAuth.auth.signOut();
      this._global.deleteLocalStorage("token");
      this._global.deleteLocalStorage("data");
      this._global.deleteLocalStorage("userdata");
      this._global.deleteLocalStorage("isLoggedIn");
      this.route.navigate(['/login']);
    }

    getLoggedInUser(){
      return this.afAuth.authState;
    }

}
