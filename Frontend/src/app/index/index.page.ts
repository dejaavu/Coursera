import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LogoutService } from '../services/logout.service';

import { MenuController } from '@ionic/angular';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  async menuControllerSwitch(){
    await this.menuController.enable(false,'homeList');
    await this.menuController.enable(true,'userList');
  }

  constructor(private platform: Platform,
              private logoutService: LogoutService,
              public menuController: MenuController,
              private subscriptionService: SubscriptionService
            ){

      this.menuControllerSwitch();
  }

  ngOnInit() {

  }


}
