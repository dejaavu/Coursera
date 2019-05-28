import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(private navParams: NavParams,
              private modalLoginController: ModalController) { }

  ngOnInit() {
  }

  closeLoginModal(){
  	this.modalLoginController.dismiss();
  }

}
