import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '../../../node_modules/@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-page-modal.page.html',
  styleUrls: ['./reg-page-modal.page.scss'],
})
export class RegModalPage implements OnInit {

  p=1;
  q=1;
  r=1;
  s=1;

  constructor(private navParams: NavParams,
  			      private modalSignUpController: ModalController,
              public alertController: AlertController) { }

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
            this.modalSignUpController.dismiss();
          }
        }
      ]
      });

      await alert.present();
    }

  closeRegModal(){
    if(this.p&&this.q&&this.r&&this.s){
      this.modalSignUpController.dismiss();
    }else{
      this.alertShow();
    }
  }

  onSubmit(form){
    	this.modalSignUpController.dismiss();
  }

}
