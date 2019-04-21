import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { TopComponent } from './top.component';
import {
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule,
  MatSelectModule,
} from '@angular/material';



describe('AttendanceTopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopComponent
      ],
      imports: [ 
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatSnackBarModule,
        MatSelectModule,
        LeafletModule,
      ],
    
    }).compileComponents();
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TopComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  
});
