import { Injectable } from '@angular/core';
import { GlobalService} from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _global:GlobalService,
    private _http:HttpClient,
  ) { }

  login(param:any){
    return  this._http.post(this._global.baseUrl()+"login",param);
  }

  employee(){
    return  this._http.get(this._global.baseUrl()+"employee");
  }
  
  employeeAttendaceDetail(empid){
    return  this._http.get(this._global.baseUrl()+"employee/"+empid+"/attendance");
  }

}
