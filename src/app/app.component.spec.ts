import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HttpClientModule } from '@angular/common/http';

import {
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule,
  MatSelectModule,
} from '@angular/material';
import { environment } from '../environments/environment';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';




describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
         RouterTestingModule,
         NgxLoadingModule,
         HttpClientModule,

         MatFormFieldModule, 
         MatInputModule, 
         MatSnackBarModule,
         MatSelectModule,

         TabsModule,
         LeafletModule.forRoot(),
         AngularFireModule.initializeApp(environment.firebase),
         AngularFireAuthModule,
      ]
    }).compileComponents();
  }));


  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

});
