import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendaceService {

  constructor() { }

  employee: Subject<any> = new Subject();
  get employeeSource() : Subject<any> {
    return this.employee;
  }
  set employeeSource(src: Subject<any>) {
    this.employee = src;
  }

  changeEmployee(n: any){
    this.employeeSource.next(n);
  }


}
