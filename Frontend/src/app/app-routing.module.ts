import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
