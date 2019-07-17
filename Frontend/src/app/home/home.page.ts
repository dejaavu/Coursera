import { Component } from '@angular/core';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menuController: MenuController) {
    menuController.enable(true);
  }

  openMenu(event){
    if(event==='home'){
      this.menuController.enable(true,'homeList');
      this.menuController.enable(false,'userList');
    } else {
      this.menuController.enable(true,'userList');
      this.menuController.enable(false,'homeList');
    }
    this.menuController.toggle();
  }
}
