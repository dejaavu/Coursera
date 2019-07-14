import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'index',
    loadChildren: './index/index.module#IndexPageModule',
    canActivate: [AuthGuard]},
  { path: 'user',
    loadChildren: './user/user.module#UserPageModule',
    canActivate: [AuthGuard]},
  { path: 'subscription',
    loadChildren: './subscription/subscription.module#SubscriptionPageModule',
    canActivate: [AuthGuard]},
  { path: 'explore',
    loadChildren: './explore/explore.module#ExplorePageModule',
    canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
