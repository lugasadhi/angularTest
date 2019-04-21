import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { ViewComponent } from './view.component';
import { ListComponent } from './components/list/list.component';
import { TopComponent } from './components/top/top.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TabsModule } from 'ngx-bootstrap/tabs';
import {
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule,
  MatSelectModule,
} from '@angular/material';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing'; 


let httpMock:HttpTestingController;


describe('AttendanceComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ViewComponent,
        ListComponent,
        TopComponent
      ],
      imports: [ 
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,

        RouterTestingModule,
        TabsModule.forRoot(),

        TooltipModule.forRoot(),
        LeafletModule,

        MatFormFieldModule,
        MatInputModule, 
        MatSnackBarModule,
        MatSelectModule,

       ]
    }).compileComponents();
  }));



  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ViewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


});
