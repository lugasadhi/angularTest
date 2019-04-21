import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { GlobalService } from './global.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';


describe('AuthService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations:[
      
    ],
    imports: [
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      RouterTestingModule,
      RouterModule,
    ],
    providers:[
      GlobalService,
      AngularFireAuth
    ]
  }));

  afterEach(()=>{
    localStorage.removeItem("token");
  })

  it('auth service should be created', () => {
    let service:AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it("isAuth() should return true when there is a token",() =>{
    let service:AuthService = TestBed.get(AuthService);
    localStorage.setItem('token','22222');
    expect(service.isAuth()).toBeTruthy();
  });

  it("isAuth() should return false when there is no token",() =>{
    let service:AuthService = TestBed.get(AuthService);
    expect(service.isAuth()).toBeFalsy();
  });
});
