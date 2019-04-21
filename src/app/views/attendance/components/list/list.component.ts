import { Component, OnInit} from '@angular/core';
import { AttendaceService } from '../../services/attendance.service';
import { GlobalService } from '../../../../services/global.service';
import { HttpService } from '../../../../services/http.service';
import { Subject } from 'rxjs';
import { tileLayer, latLng,  marker,  Map, LatLng } from 'leaflet';

@Component({
  selector: 'attendant-list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit{

  constructor(
    private _global:GlobalService,
    private _service:AttendaceService,
    private _http:HttpService,
  ) {
    this.doc = document;
   }

   doc;
  employee;
  ldng: Subject<boolean>;

  ngOnInit(): void {
    this.ldng = this._service.employeeSource;
    this.ldng.subscribe(value => {
      this.employee = value;
      this.getListAttandace();
    });
  
  }

  hide;
  hide2;
  map: Map;
  map2: Map;
  onMapReady(map: Map) {
    this.map = map;
  }
  onMapReady2(map: Map) {
    this.map2 = map;
  }


  listAttendance;
  getListAttandace(){
    this._global.changeLoading(true);
    this._http.employeeAttendaceDetail(this.employee.id)
    .subscribe((data:any)=>{
      this._global.changeLoading(false);
      this.listAttendance = data;
      if(data != undefined){
        this.setMap(data[0]);
      }
    },(err:any)=>{
      this._global.changeLoading(false);
    });
  }


  poprght:boolean = false;
  detItm:any;
  popRight(item){
    this.poprght=true;
    this.setMap(item);
  }

  setMap(item){
    item.first_latitude = parseFloat(item.first_latitude);
    item.first_longitude = parseFloat(item.first_longitude);
    item.last_latitude = parseFloat(item.last_latitude);
    item.last_longitude = parseFloat(item.last_longitude);
    item.first_map = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],
        zoom:  9,
        center: latLng( item.first_latitude, item.first_longitude),
        detectRetina: true
    };
    item.first_marker = [
      marker([ item.first_latitude, item.first_longitude ])
    ];
    item.last_map = {
                layers: [
                    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
                ],
                zoom: 9,
                center: latLng(item.last_latitude, item.last_longitude),
                detectRetina: true
            };
    item.last_marker = [
      marker([ item.last_latitude, item.last_longitude ])
    ]

    if(this.map != undefined){
      this.map.panTo(new LatLng(item.first_latitude, item.first_longitude));
      this.map.remove();
    } 
    if(this.map2 != undefined){
      this.map2.panTo(new LatLng(item.last_latitude, item.last_longitude));
      this.map2.remove();
    }
    
    this.detItm=item;
  }

  mouseEnter(){
    var element = document.getElementById("map-ttl-left");
    var element2 = document.getElementById("map-ttl-right");
    element.classList.add("d-none");
    element2.classList.add("d-none");
  }

  
  selisih(starts, ends){
    let startDate;
    let endDate;
    starts = new Date(starts);
    ends = new Date(ends);
    if(ends < starts){
      startDate = new Date(0, 0, 0, ends.getHours(), ends.getMinutes(), 0);
      endDate =  new Date(0, 0, 0, starts.getHours(), starts.getMinutes(), 0);
    }else{
      startDate = new Date(0, 0, 0, starts.getHours(), starts.getMinutes(), 0);
      endDate = new Date(0, 0, 0, ends.getHours(), ends.getMinutes(), 0);
    }
    let diff = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
  }

  selisih2(starts, ends){
    let startDate;
    let endDate;
    starts = new Date(starts);
    ends = new Date(ends);
    if(ends < starts){
      startDate = new Date(0, 0, 0, ends.getHours()+1, ends.getMinutes(), 0);
      endDate =  new Date(0, 0, 0, starts.getHours(), starts.getMinutes(), 0);
    }else{
      startDate = new Date(0, 0, 0, starts.getHours()+1, starts.getMinutes(), 0);
      endDate = new Date(0, 0, 0, ends.getHours(), ends.getMinutes(), 0);
    }
    let diff = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
  }

}
