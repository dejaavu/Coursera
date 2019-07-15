import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { RegModalPage } from './reg-page-modal/reg-page-modal.page';
import { LoginModalPage } from './login-modal/login-modal.page';

import { LoginService } from './services/login.service';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  user = {
    name: 'USER',
    email: 'user@user.com',
    branch: 'BranchTemp',
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController,
    private modalSignUpController: ModalController,
    private modalLoginController: ModalController,
    private menucontroller: MenuController,
    private loginService: LoginService, private router: Router
  ) {
    this.initializeApp();
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
    this.menucontroller.close(),
    modalLogin.present();
  }

}
