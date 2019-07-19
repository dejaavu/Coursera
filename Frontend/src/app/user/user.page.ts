import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user = {
    name: 'USER',
    email: 'user@user.com',
    branch: 'BranchTemp',
  };

  public form1: FormGroup;

  constructor(public formBuilder: FormBuilder,
              private platform: Platform,
              private toastController: ToastController,
              private userService: UserService) {
    this.form1 = formBuilder.group({
	        name: [''],
	        info: [''],
	        location: [''],
          skills: [''],
          gender: [''],
          dateofbirth: [''],
	    });

  }

  ngOnInit() {
  }

  submit() {
    this.userService.submit(this.form1.value).subscribe(
      res => {
        if(res["status"]){
          this.presentToast(`User data updated successfully`);
        } else {
          this.presentToast(`User data not updated successfully`);
          console.log(res['message']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

}
