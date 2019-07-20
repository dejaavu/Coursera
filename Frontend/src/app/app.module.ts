import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RegModalPageModule } from './reg-page-modal/reg-page-modal.module';
import { LoginModalPageModule } from './login-modal/login-modal.module';
import { GetcoursePipe } from './getcourse.pipe';
import { PipesModule } from './getcourse.pipe.module';

import { ExploreService } from './services/explore.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RegModalPageModule,
    LoginModalPageModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ExploreService,
    GetcoursePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
