import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[
      
    ],
    imports: [
      AngularFireModule,
      AngularFireAuthModule,
    ],
  }));

  it('Global service should be created', () => {
    const service: GlobalService = TestBed.get(GlobalService);
    expect(service).toBeTruthy();
  });
});
