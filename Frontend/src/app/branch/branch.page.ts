import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  user = {
    name: 'USER',
    email: 'user@user.com',
    branch: 'BranchTemp',
  };

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

}
