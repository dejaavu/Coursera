import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {

  categories;

  constructor() {
    this.categories=['category1','category2'];
  }

  ngOnInit() {
  }

}
