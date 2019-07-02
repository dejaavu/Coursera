import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'index', pathMatch: 'full', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'subscription', loadChildren: './subscription/subscription.module#SubscriptionPageModule' },
  { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
