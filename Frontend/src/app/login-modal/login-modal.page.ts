import { Component, OnInit } from '@angular/core';

import { ModalController } from '../../../node_modules/@ionic/angular';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})

export class LoginModalPage implements OnInit {

  private emailset=0;
  private pwdset=0;

  constructor(private modalLoginController: ModalController,
              public alertController: AlertController,
              private toastController: ToastController,
              private loginService: LoginService,
              private router: Router
            ) {
  }

  ngOnInit() {

  }

  async alertShow() {
      const alert = await this.alertController.create({

        message: 'Are you sure?',
        buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          cssClass: 'tertiary',
          handler: () => {
            this.modalLoginController.dismiss();
          }
        }
      ]
      });

      await alert.present();
    }

  onSubmit(form){
    this.loginService.login(form)
    .subscribe(
      res => {
        if(res["status"]){
          this.presentToast(`Login Successful`);
          this.modalLoginController.dismiss();
          this.router.navigate(['/index']);
          location.reload();
        } else {
          this.presentToast(`Login Unsuccessful : ${ res["message"] }`);
        }

      },
      err => {
        console.log(err);
      });
  }

  closeLoginModal(){
  	if(!this.emailset&&!this.pwdset){
      this.modalLoginController.dismiss();
    }else{
      this.alertShow();
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

}
