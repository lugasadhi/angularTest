// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ViewComponent } from './view.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Theme Routing
import { AttendanceRoutingModule } from './attendance-routing.module';

import {
  MatFormFieldModule, 
  MatInputModule, 
  MatSnackBarModule,
  MatSelectModule,
} from '@angular/material';
//component
import { ListComponent } from './components/list/list.component';
import { TopComponent } from './components/top/top.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    FormsModule,

    MatFormFieldModule, 
    MatInputModule, 
    MatSnackBarModule,
    MatSelectModule,
    TooltipModule.forRoot(),
    
    AttendanceRoutingModule,

    LeafletModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDenCxBzRnKcpw9ijbIuMUy8z_0hoeubNs'
    })
  ],
  declarations: [
    ViewComponent,
    ListComponent,
    TopComponent
  ]
})
export class AttendanceModule { }
