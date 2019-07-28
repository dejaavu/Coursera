import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { SubscriptionService} from '../services/subscription.service';
import { UserService} from '../services/user.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  private course;
  private count = 0;
  private count2 = 0;
  private text;
  private text2;
  private subscribed;
  private uploader;
  private slice = 160;
  private id = this.router.url.slice(8);

  switchslice(){
    this.count2++;
    if(this.count2%2){
      this.slice = undefined;
      this.text2 = "Show Less";
    } else {
      this.slice = 160;
      this.text2 = "Show More";
    }
  }

  async getcourse(){
    var course = await this.courseService.getCourseById(this.router.url.slice(8)).toPromise();
    return course[0];
  }

  async getuploader(){
    var course = await this.getcourse();
    var uploader = await this.userService.getinfobyemail(course.uploader).toPromise();
    return uploader;
  }

  async checkSub(){
    var sub = await this.subscriptionService.getSubById(this.router.url.slice(8)).toPromise();
    return sub[0];
  }

  async subscribe(){
    if(this.count%2==0){
      this.subscriptionService.addSub(this.router.url.slice(8)).subscribe(
        res => {
          if(res["status"]){
            this.presentToast(`Subscribed successfully`);
            this.text = "Unsubscribe";
            this.count = this.count + 1;
          } else {
            this.presentToast(`Subscription unsuccessful`);
            console.log(res);
          }
        },
        err => {
          console.log(err);
        });
    } else {
      this.subscriptionService.removeSub(this.router.url.slice(8)).subscribe(
        res => {
          if(res["status"]){
            this.presentToast(`Unsubscribed successfully`);
            this.count = this.count + 1;
            this.text = "Subscribe";
          } else {
            this.presentToast(`Unsubscription unsuccessfull`);
            console.log(res['message']);
          }
        },
        err => {
          console.log(err);
        });
    }
    console.log(this.count);
  }

async presentToast(msg: string) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000,
  });
  toast.present();

}

  constructor(private platform: Platform,
              private courseService: CourseService,
              private subscriptionService: SubscriptionService,
              private userService: UserService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    this.uploader = this.getuploader();
    this.course = this.getcourse();
    this.subscribed = this.checkSub();
    console.log(await this.subscribed);
    if(await this.subscribed){
      this.text = "Unsubscribe";
      this.count = 1;
    } else {
      this.text = "Subscribe";
    }
    this.text2 = "Show More";
  }

}
