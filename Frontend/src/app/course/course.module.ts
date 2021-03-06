import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { GetvaluePipe } from '../getvalue.pipe';
import { PipesModule } from '../getvalue.pipe.module';

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
  providers: [GetvaluePipe]
})
export class CoursePageModule {}
