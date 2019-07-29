import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GetvaluePipe } from '../getvalue.pipe';
import { PipesModule } from '../getvalue.pipe.module';

import { IonicModule } from '@ionic/angular';
import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [UserPage],
  providers: [
      GetvaluePipe,
      ]
})
export class UserPageModule {}
