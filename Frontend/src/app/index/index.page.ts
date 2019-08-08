import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LogoutService } from '../services/logout.service';

import { MenuController } from '@ionic/angular';
import { SubscriptionService } from '../services/subscription.service';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  async menuControllerSwitch(){
    await this.menuController.enable(false,'homeList');
    await this.menuController.enable(true,'userList');
  }

  private subs;
  private slice = 5;
  private slice1 = 160;

  async subscriptions(){
    return await this.subscriptionService.getsubs().toPromise();
  }

  constructor(private platform: Platform,
              private logoutService: LogoutService,
              public menuController: MenuController,
              private subscriptionService: SubscriptionService
            ){
  }

  loadData(event) {
    setTimeout(() => {
      this.slice += 2;
      event.target.complete();
    }, 500);
  }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.menuControllerSwitch();
    this.subs = this.subscriptions();
  }


}
