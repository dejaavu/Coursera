import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { RegModalPage } from './reg-page-modal/reg-page-modal.page';
import { LoginModalPage } from './login-modal/login-modal.page';

import { CanActivate, Router } from '@angular/router';
import { LogoutService } from './services/logout.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private user;
  private avatar;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalSignUpController: ModalController,
    private modalLoginController: ModalController,
    private menuController: MenuController,
    private router: Router,
    private logoutService: LogoutService,
    private userService: UserService
  ) {
    this.initializeApp();
    if(localStorage.getItem('email')){
      this.userService.load();
      this.userService.loadid(localStorage.getItem('email').split('.')[0]+localStorage.getItem('email').split('.')[1]);
    }
    this.userService.userinfo.subscribe((info) => {
      this.user = info;
      if(info.name == ''){
        this.user.name = 'USER';
      }
    });
    this.userService.avatarid.subscribe((id)=>{
      this.userService.getavatar(id).subscribe((data)=>{
        this.createAvatar(data);
      }, (err)=>{
        console.log(err);
      });
    });
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

  createAvatar(image) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.avatar = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }
}
