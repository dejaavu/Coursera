import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { GetcoursePipe } from '../getcourse.pipe';
import { PipesModule } from '../getcourse.pipe.module';

import { IonicModule } from '@ionic/angular';

import { CoursePage } from './course.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [CoursePage],
  providers: [GetcoursePipe]
})
export class CoursePageModule {}
