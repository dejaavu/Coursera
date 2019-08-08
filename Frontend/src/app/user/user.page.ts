import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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

  private user;
  public form1: FormGroup;

  constructor(public formBuilder: FormBuilder,
              private platform: Platform,
              private toastController: ToastController,
              private userService: UserService,
              ) {
    this.form1 = formBuilder.group({
	        name: [''],
	        info: [''],
          gender: [''],
          dateofbirth: [''],
          avatar: null,
	    });
  }

  ngOnInit() {
  }

  submit(){
    let input = new FormData();
    input.append('name', this.form1.get('name').value);
    input.append('info', this.form1.get('info').value);
    input.append('gender', this.form1.get('gender').value);
    input.append('dateofbirth', this.form1.get('dateofbirth').value);
    input.append('avatar', this.form1.get('avatar').value);
    this.userService.submit(input).subscribe(
      res => {
        if(res["status"]){
          this.presentToast(`User data updated successfully`);
        } else {
          this.presentToast(`User data not updated successfully`);
        }
      },
      err => {
        this.presentToast('Error occurred. Check console for details');
        console.log(err);
      }
    );
  }

  async getuser(){
    var info = await this.userService.getinfo();
    return info;
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  onFileChange(event) {
    if(event.target.files.length > 0){
      console.log(1);
      var image = event.target.files[0];
      this.form1.get('avatar').setValue(image);
    }
  }

  ionViewWillEnter(){
    this.userService.userinfo.subscribe((info) => {
      this.user = info;
    });
  }

}
