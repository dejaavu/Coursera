import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { BranchService } from '../services/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.page.html',
  styleUrls: ['./branch.page.scss'],
})
export class BranchPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  courses;
  private slice = 5;

  constructor(private platform: Platform,
              private branchService: BranchService,
              private router: Router) {
  }

  ngOnInit() {
  }

  async getcourses(){
    return await this.branchService.getcourses(this.router.url.slice(8)).toPromise();
  }

  loadData(event) {
    setTimeout(() => {
      this.slice += 2;
      event.target.complete();
    }, 500);
  }

  ionViewWillEnter(){
    this.courses = this.getcourses();
  }

}
