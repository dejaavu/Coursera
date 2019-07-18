import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LogoutService } from '../services/logout.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  user = {
    name: 'USER',
    email: 'user@user.com',
    branch: 'BranchTemp',
  };

  slideOpts = {
    slidesPerView: 3,
    initialSlide: 0,
    speed: 400
  };

  userCourses = [
            {
              title:"course1",
              subtitle:"course1",
              content:"welcome to the course",
              id:"1"
            },
            {
              title:"course2",
              subtitle:"course2",
              content:"welcome to the course",
              id:"2"
            },
            {
              title:"course3",
              subtitle:"course3",
              content:"welcome to the course",
              id:"3"
            },
            {
              title:"course4",
              subtitle:"course4",
              content:"welcome to the course",
              id:"4"
            },
  ];

  leng = this.userCourses.length;

  userBranchCourses = [
            {
              title:"course1",
              subtitle:"course1",
              content:"welcome to the course",
              id:"1"
            },
            {
              title:"course2",
              subtitle:"course2",
              content:"welcome to the course",
              id:"2"
            },
            {
              title:"course3",
              subtitle:"course3",
              content:"welcome to the course",
              id:"3"
            },
            {
              title:"course4",
              subtitle:"course4",
              content:"welcome to the course",
              id:"4"
            },
  ];

  leng2 = this.userBranchCourses.length;

  async abc(){
    await this.menuController.enable(false,'homeList');
    await this.menuController.enable(true,'userList');
  }

  constructor(private platform: Platform,
              private logoutService: LogoutService,
              public menuController: MenuController
            ){

      this.abc();
  }

  ngOnInit() {

  }
}
