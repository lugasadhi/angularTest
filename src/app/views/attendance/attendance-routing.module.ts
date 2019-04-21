import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Attendance'
    },
    children: [
      {
        path: '',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: ViewComponent,
        data: {
          title: 'View Attendance'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule {}
