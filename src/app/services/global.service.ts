import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
  ) { }
  //  bsUrl = "https://reqres.in/api/";
   bsUrl = "https://5cb4ef64bbf7b50014cabeb9.mockapi.io/api/";

  baseUrl(){
    return this.bsUrl;
  }

  setLocalStorage(name,values){
    localStorage.setItem(name, JSON.stringify(values));
  }

  getLocalStorage(name){
    var res = localStorage.getItem(name);
    return JSON.parse(res);
  }

  deleteLocalStorage(key){
    localStorage.removeItem(key);
  }


  loading = new Subject<boolean>();
  
  // get fooSource() : Subject<boolean> {
  //   return this.loading;
  // }
  // set fooSource(src: Subject<boolean>) {
  //   this.loading = src;
  // }


  changeLoading(n: boolean){
    this.loading.next(n);
  }


}
