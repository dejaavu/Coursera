import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menuController: MenuController,private platform: Platform) {
  }

  async openMenu(){
    await this.menuController.enable(true,'homeList');
    this.menuController.toggle();
  }
}
