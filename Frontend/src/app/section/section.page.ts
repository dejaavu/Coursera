import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {

  constructor() { }

  private section =
    {
      name: "Lorem",
      video:[{
        name : "video"
      }]

    }

  ngOnInit() {
  }

}
