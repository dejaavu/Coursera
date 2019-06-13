import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '../../../node_modules/@ionic/angular';

import { HttpClient } from '@angular/common/http';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-page-modal.page.html',
  styleUrls: ['./reg-page-modal.page.scss'],
})
export class RegModalPage implements OnInit {

  nameset=0;
  emailset=0;
  pwdset=0;
  pwdagainset=0;
  userlevelset=0;

  constructor(private navParams: NavParams,
  			      private modalSignUpController: ModalController,
              public alertController: AlertController,
              private toastController: ToastController,
              private http: HttpClient) { }

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
    if(!this.nameset&&!this.emailset&&!this.pwdset&&!this.pwdagainset&&!this.userlevelset){
      this.modalSignUpController.dismiss();
    }else{
      this.alertShow();
    }
  }

  onSubmit(form){
    if(this.userlevelset){
      this.http.post("http://localhost:5000/api/register",form.value,{ })
      .subscribe(
        res => {
          if(res["status"]){
            this.presentToast("Registration Successful");
            this.modalSignUpController.dismiss();
          } else {
            this.presentToast(`Registration Unsuccessful : ${ res["message"] }`);
          }

          console.log(res);
       },
        err => {
          console.log(err);
        }
      );

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
