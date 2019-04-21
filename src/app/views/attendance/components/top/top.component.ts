import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../../services/global.service';
import { AttendaceService } from '../../services/attendance.service';
import { HttpService } from '../../../../services/http.service';



@Component({
  selector: 'attendant-top',
  templateUrl: 'top.component.html',
  styleUrls: ['./top.component.scss'],

})
export class TopComponent implements OnInit {

  nowdate;
  last7date;

  constructor(
    private _http:HttpService,
    private _global:GlobalService,
    private _service:AttendaceService,
  ) { 
    this.nowdate= new Date();
    this.last7date = new Date();
    this.last7date.setDate(this.nowdate.getDate()-7);
  }

  ngOnInit(){
    this.getUserList();
  }

  employees:any;
  avatar;
  selectedValue:string;
  getUserList(){
    this._global.changeLoading(true);
    this._http.employee()
    .subscribe((data:any)=>{
      this._global.changeLoading(false);
      this.employees = data;
      if(data.length > 0){
        this.selectedValue = data[0].id;
        this.getAvatar();
      }
    },(err:any)=>{
      this._global.changeLoading(false);
    })
  }


  avatarHiden=false;
  getAvatar(){
    let dds ='';
    if(this.employees != undefined){
      for (let i = 0; i < this.employees.length; i++) {
        const element = this.employees[i];
        if(element.id === this.selectedValue){
          dds = element.avatar;
          this._service.changeEmployee(element);
          break;
        }
      }
    }
    if(dds == ''){
      this.avatarHiden = false;
    }else{
      this.avatarHiden = true;
    }
    this.avatar=dds;
  }

  minDate(){
    this.nowdate = new Date(this.nowdate.setDate(this.nowdate.getDate()-7));
    this.last7date = new Date(this.last7date.setDate(this.last7date.getDate()-7));
  }
  addDate(){
    this.nowdate =new Date( this.nowdate.setDate(this.nowdate.getDate()+7));
    this.last7date = new Date(this.last7date.setDate(this.last7date.getDate()+7));
  }

}
