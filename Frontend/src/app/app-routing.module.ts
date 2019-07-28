import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';
import { AdminGuard } from './guards/admin.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule',
    canActivate: [HomeGuard]},
  { path: 'index',
    loadChildren: './index/index.module#IndexPageModule',
    canActivate: [AuthGuard]},
  { path: 'user',
    loadChildren: './user/user.module#UserPageModule',
    canActivate: [AuthGuard]},
  { path: 'explore',
    loadChildren: './explore/explore.module#ExplorePageModule',
    canActivate: [AuthGuard]},
  { path: 'branch/:branch', loadChildren: './branch/branch.module#BranchPageModule',
    canActivate: [AuthGuard]},
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule',
    canActivate: [AuthGuard, AdminGuard]},
  { path: 'course/:id', loadChildren: './course/course.module#CoursePageModule',
    canActivate: [AuthGuard]},
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule',
    canActivate: [AuthGuard]},
  { path: 'syllabus', loadChildren: './syllabus/syllabus.module#SyllabusPageModule',
    canActivate: [AuthGuard]},
  { path: 'superadmin', loadChildren: './superadmin/superadmin.module#SuperadminPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
