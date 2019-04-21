import { Component, OnInit, AfterContentInit,  ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {GlobalService} from './services/global.service';
import { Subject } from 'rxjs';
import $ from 'jquery';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `<router-outlet></router-outlet>
            <div class="loading-spinner d-none justify-content-center align-items-center">
              <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
              </div>
            </div>
            `,
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit, AfterContentInit {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private _global:GlobalService,
    private ref: ChangeDetectorRef,
  ) { 
    this.loading;
    this.ref.markForCheck();
  }

  loading:boolean = false;
  ldng: Subject<boolean>;
  ldg = new Subject();

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterContentInit() {
    this._global.loading.subscribe(
    value => {
        // this.loading = value;
        if(value){
          $(".loading-spinner").removeClass("d-none");
          $(".loading-spinner").addClass("d-flex");

        }else{
          $(".loading-spinner").addClass("d-none");
          $(".loading-spinner").removeClass("d-flex");
        }
    },
    error => {console.log(error);},
    );
  }
}
