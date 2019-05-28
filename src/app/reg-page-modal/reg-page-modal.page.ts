import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-reg-modal',
  templateUrl: './reg-page-modal.page.html',
  styleUrls: ['./reg-page-modal.page.scss'],
})
export class RegModalPage implements OnInit {

  constructor(private navParams: NavParams,
  			  private modalSignUpController: ModalController) { }

  ngOnInit() {
  }

  closeRegModal(){
  	this.modalSignUpController.dismiss();
  }

  onSubmit(form){
    this.closeRegModal();
  }

}
