import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import {HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing'; 
import {MockBackend} from '@angular/http/testing';
import { GlobalService} from './global.service';


describe('HttpService', () => {

  let service:HttpService;
  let httpMock:HttpTestingController;
  let global:GlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers:[
        HttpService,
        MockBackend,
        GlobalService,
      ]
    });
    service = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
    global = TestBed.get(GlobalService);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should http login retrive post from the API via POST', () => {
    const dummyPost ={
      displayName: "Wayne Shanahan",
      email: "Janessa.Weissnat88@hotmail.com",
      id: "3",
      jobtitle: "Lead Factors Designer",
      password: "sempak",
      photoURL: "https://s3.amazonaws.com/uifaces/faces/twitter/victorDubugras/128.jpg",
      token: "c45702b8-3919-4811-bb26-0bde04e19f9c",
      username: "sempak"
    };

    const dummyParam ={
      'username':'asdasd',
      'password':'asdasdasd'
    }

    service.login(dummyParam).subscribe((res:any)=>{
      expect(res.photoURL).toContain("http");
    });

    const request = httpMock.expectOne(global.baseUrl()+"login");
    expect(request.request.method).toBe("POST");
    request.flush(dummyPost);
  });


  it('should http employee retrive GET from the API via GET', () => {
    const dummyPost =[
      {
        "id":"1",
        "name":"Silas Hermann",
        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/terryxlife/128.jpg"
      }
    ];

    service.employee().subscribe((res:any)=>{
      expect(res.length).toBeGreaterThan(0);
      expect(res[0].avatar).toContain("http");
    });

    const request = httpMock.expectOne(global.baseUrl()+"employee");
    expect(request.request.method).toBe("GET");
    request.flush(dummyPost);
  });


  it('should http employeeDetailAttendace retrive GET from the API via GET', () => {
    const dummyPost =[{
      "id":"1",
      "employeeId":"1",
      "date":"2018-12-24T03:37:08.442Z",
      "first_in":"2019-04-16T16:35:23.056Z",
      "last_out":"2019-04-16T17:23:57.149Z",
      "total_hours":14,
      "total_works":82,
      "first_latitude":"80.0295",
      "first_longitude":"-119.8771",
      "first_city":"Connellychester",
      "last_latitude":"-27.8234",
      "last_longitude":"-140.2820",
      "last_city":"North Janick",
      "status":false}
      ,{"id":"17",
        "employeeId":"1",
        "date":"2019-02-27T10:25:23.107Z",
        "first_in":"2019-04-16T09:59:38.949Z",
        "last_out":"2019-04-16T17:54:09.024Z",
        "total_hours":12,
        "total_works":81,
        "first_latitude":"44.9100",
        "first_longitude":"-166.1091",
        "first_city":"Emardbury",
        "last_latitude":"-54.2015",
        "last_longitude":"-109.5887",
        "last_city":"North Blanche","status":true}
    ];

    let dummyno="1";
    service.employeeAttendaceDetail(dummyno).subscribe((res:any)=>{
      expect(res.length).toBeGreaterThan(0);
      expect(parseInt(res[0].total_hours)).toBeGreaterThanOrEqual(parseInt(res.total_works));
      let dt1 = new Date(res.first_in);
      let dt2 = new Date(res.last_out);
      console.log(dt1);
      console.log(dt2);
      
      // expect(dt1).toBeLessThan(dt2);
    });
    
    const request = httpMock.expectOne(global.baseUrl()+"employee/"+dummyno+"/attendance");
    expect(request.request.method).toBe("GET");
    request.flush(dummyPost);
  });

});
