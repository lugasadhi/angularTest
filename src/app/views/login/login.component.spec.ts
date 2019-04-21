import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing'; 


import {FormsModule, NgForm} from '@angular/forms';

import {LoginComponent} from './login.component';
import {
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule,
  MatSelectModule,
} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { GlobalService } from '../../services/global.service'


describe('LoginComponent',() => {
  let component : LoginComponent;
  let fixture : ComponentFixture<LoginComponent>;
  let de : DebugElement;
  let service: LoginComponent;
  let global: GlobalService;
  let httpMock:HttpTestingController;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations:[
        LoginComponent,
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule,

        MatFormFieldModule, 
        MatInputModule, 
        MatSnackBarModule,
        MatSelectModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
      ],
      providers:[
        GlobalService,
        LoginComponent,
        HttpTestingController,
      ]
    })
    .compileComponents();

    service = TestBed.get(LoginComponent);
    global = TestBed.get(GlobalService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });


  it('should create',() => {
    expect(component).toBeTruthy();
  });

  it(`popup should hide first`,()=>{
    expect( component.popup).toBeFalsy();
  });

})