import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {

  constructor(private router: Router,private platform: Platform) { }

  private sections = [
    {
      name: "welcome"
    },
    {
      name: "to"
    },
    {
      name: "the"
    },
    {
      name: "game"
    },
    {
      name: "Lorem"
    },
    {
      name: "baby"
    },
  ];

  private syllabus = [
    {
      name: "Lorem",
      section: this.sections
    },
    {
      name: "Lorem",
      section: this.sections
    },
    {
      name: "Lorem",
      section: this.sections
    },
    {
      name: "Lorem",
      section: this.sections
    },
    {
      name: "Lorem",
      section: this.sections
    },
    {
      name: "Lorem",
      section: this.sections
    },
  ];

  ngOnInit() {
  }

}
