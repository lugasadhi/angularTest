// import { RouterTestingModule } from '@angular/router/testing';
// import { async, ComponentFixture, fakeAsync, TestBed, tick,
// } from '@angular/core/testing';
// import {Location, LocationStrategy} from '@angular/common';
// import {Router, RouterLinkWithHref} from '@angular/router';
// import { SpyLocation, MockLocationStrategy }         from '@angular/common/testing';


// import {
//   AppAsideModule,
//   AppBreadcrumbModule,
//   AppHeaderModule,
//   AppFooterModule,
//   AppSidebarModule,
// } from '@coreui/angular';

// import { P404Component } from './views/error/404.component';
// import { P500Component } from './views/error/500.component';
// import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';
// import {routes, AppRoutingModule} from './app.routing'
// import {AppComponent} from './app.component'
// import { FormsModule }   from '@angular/forms';

// import {
//   MatFormFieldModule, 
//   MatInputModule, 
//   MatSnackBarModule,
//   MatSelectModule,
// } from '@angular/material';

// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { AngularFireModule } from '@angular/fire';
// import {AngularFireAuthModule} from '@angular/fire/auth';
// import { environment } from '../environments/environment';
// import { DefaultLayoutComponent } from './containers';
// import {DashboardComponent} from './views/dashboard/dashboard.component'
// import { By }                 from '@angular/platform-browser';
// import { DebugElement, Type } from '@angular/core';


// const APP_CONTAINERS = [
//   DefaultLayoutComponent
// ];
// const PAGE_CONTAINERS = [
//   P404Component,
//   P500Component,
//   LoginComponent,
//   RegisterComponent,
//   DashboardComponent,
// ];

// // import {ROUTER_PROVIDERS, ROUTES } from './private_import_router';
// import {HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing'; 


// let comp:     AppComponent;
// let fixture:  ComponentFixture<AppComponent>;
// let router:   Router;
// let location: SpyLocation;
// let page:     Page;

// describe('Routing', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         ...PAGE_CONTAINERS,
//         ...APP_CONTAINERS,
//       ],
//       imports: [
//         RouterTestingModule.withRoutes(routes),
//         FormsModule,
//         MatFormFieldModule, 
//         MatInputModule, 
//         MatSnackBarModule,
//         MatSelectModule,

//         PerfectScrollbarModule,

//         AngularFireModule.initializeApp(environment.firebase),
//         AngularFireAuthModule,

//         AppAsideModule,
//         AppBreadcrumbModule,
//         AppHeaderModule,
//         AppFooterModule,
//         AppSidebarModule,
        
//         AppRoutingModule,
      
//         HttpClientTestingModule,
        
//       ],
//       providers:[
//         HttpTestingController,
//         routes, 
//         { provide: Router, useClass: SpyLocation }
//       ]
     
//     }) .compileComponents();;

//     router = TestBed.get(Router);
//     location=TestBed.get(Location);
//     fixture=TestBed.createComponent(AppComponent);
//     router.initialNavigation();

//   }));
 

//   it('should navigate to "Dashboard" immediately', fakeAsync(() => {
//     createComponent();
//     tick(); // wait for async data to arrive
//     expect(location.path()).toEqual('/dashboard', 'after initialNavigation()');
//     expectElementOf(DashboardComponent);
//   }));
  
// });

 


// ////// Helpers /////////

// /**
//  * Advance to the routed page
//  * Wait a tick, then detect changes, and tick again
//  */


// function createComponent() {
//   fixture = TestBed.createComponent(AppComponent);
//   comp = fixture.componentInstance;

//   const injector = fixture.debugElement.injector;
//   location = injector.get(Location) as SpyLocation;
//   router = injector.get(Router);
//   router.initialNavigation();
//   spyOn(injector.get(AppAsideModule), 'getQuote')
//     // fake fast async observable
//     .and.returnValue(asyncData('Test Quote'));
//   advance();

//   page = new Page();
// }

// class Page {
//   aboutLinkDe:     DebugElement;
//   dashboardLinkDe: DebugElement;
//   heroesLinkDe:    DebugElement;

//   // for debugging
//   comp: AppComponent;
//   location: SpyLocation;
//   router: Router;
//   fixture: ComponentFixture<AppComponent>;

//   constructor() {
//     const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
//     this.aboutLinkDe     = links[2];
//     this.dashboardLinkDe = links[0];
//     this.heroesLinkDe    = links[1];

//     // for debugging
//     this.comp    = comp;
//     this.fixture = fixture;
//     this.router  = router;
//   }
// }

// function expectElementOf(type: Type<any>): any {
//   const el = fixture.debugElement.query(By.directive(type));
//   expect(el).toBeTruthy('expected an element for ' + type.name);
//   return el;
// }
