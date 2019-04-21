import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { GlobalService } from '../../services/global.service'
import { HttpService } from '../../services/http.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{
    popup = false;

    constructor(
      private auth:AuthService,
      private _global:GlobalService,
      private router:Router,
      private http:HttpService,
    ){ }

    ngOnInit(){
    
    }

    googleAuth(){
      this.auth.googleLogin();
    }

    facebookAuth(){
      this.auth.facebookLogin();
    }

    onSubmit(login: NgForm){
      
      if(login.valid){
        this._global.changeLoading(true);
        this.http.login(login.value).subscribe((data:any) => {
          this._global.changeLoading(false);
          
          if(data.token != undefined){
            this._global.setLocalStorage("userdata",data);
            this._global.setLocalStorage("token",data.token);
            this.router.navigate(['/dashboard']);
          }else{
            
          }
        },
          error => {
            console.log(error);
          }
        );
      }
    }

 }
