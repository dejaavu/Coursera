import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { CourseService } from '../services/course.service';
import { SubscriptionService} from '../services/subscription.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  course;
  count = 0;
  text = "Subscribe";
  subscribed;
  async getcourse(){
    var course = await this.courseService.getCourseById(this.router.url.slice(8)).toPromise();
    return course[0];
  }

  async checkSub(){
    var sub = await this.subscriptionService.getSubById(this.router.url.slice(8)).toPromise();
    return sub;
  }

  subscribe(){
    console.log('1');
    if(this.count%2==0){
      this.text = "Unsubscribe";
      this.subscriptionService.addSub(this.router.url.slice(8)).subscribe(
        res => {
          if(res["status"]){
            this.presentToast(`Subscribed successfully`);
          } else {
            this.presentToast(`Subscription unsuccessfull`);
            console.log(res['message']);
          }
        },
        err => {
          console.log(err);
        });
    } else {
      this.text = "Subscribe";
      this.subscriptionService.removeSub(this.router.url.slice(8)).subscribe(
        res => {
          if(res["status"]){
            this.presentToast(`Unsubscribed successfully`);
          } else {
            this.presentToast(`Unsubscription unsuccessfull`);
            console.log(res['message']);
          }
        },
        err => {
          console.log(err);
        });
    }
    this.count++;
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
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.course = this.getcourse();
    this.subscribed = this.checkSub();
  }

}
