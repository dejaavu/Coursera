import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '../../../node_modules/@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})

export class LoginModalPage implements OnInit {

  a=1;
  b=1;

  constructor(private navParams: NavParams,
              private modalLoginController: ModalController,
              public alertController: AlertController) {
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
    this.modalLoginController.dismiss();
  }

  closeLoginModal(){
  	if(this.a&&this.b){
      this.modalLoginController.dismiss();
    }else{
      this.alertShow();
    }
  }

}
