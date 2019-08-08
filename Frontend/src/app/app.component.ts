import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { RegModalPage } from './reg-page-modal/reg-page-modal.page';
import { LoginModalPage } from './login-modal/login-modal.page';
import { IndexPage } from './index/index.page';

import { CanActivate, Router } from '@angular/router';
import { LogoutService } from './services/logout.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {

  @ViewChild(IndexPage) child;

  private email;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalSignUpController: ModalController,
    private modalLoginController: ModalController,
    private menuController: MenuController,
    private router: Router,
    private logoutService: LogoutService,
    private loginService: LoginService
  ) {
    this.initializeApp();
  }

  ngAfterViewInit(){
    this.email = this.child.email;
    console.log(this.child.email + "1");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  async openModalSignUp() {
    const modalSignUp = await this.modalSignUpController.create({
      component: RegModalPage,
      backdropDismiss: false,
    });

    modalSignUp.present();
  }

  async openModalLogin() {
    const modalLogin = await this.modalLoginController.create({
      component: LoginModalPage,
      backdropDismiss: false,
    });
    this.menuController.close(),
    modalLogin.present();
  }

  logout(){
    this.menuController.close();
    this.logoutService.logout();
  }

}
