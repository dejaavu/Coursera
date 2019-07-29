import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(private router: Router,private platform: Platform) {
    for(var i = 0; i < this.faq.length; i++) {
    this.set.push(0);
    this.label.push("arrow-forward");
    }
  }

  private faq = [
    {
      question: "When will I have access to the lectures and assignments?",
      answer: "Once you enroll for a Certificate, you’ll have access to all videos, quizzes, and programming assignments (if applicable). Peer review assignments can only be submitted and reviewed once your session has begun. If you choose to explore the course without purchasing, you may not be able to access certain assignments."
    },
    {
      question: "When will I have access to the lectures and assignments?",
      answer: "Once you enroll for a Certificate, you’ll have access to all videos, quizzes, and programming assignments (if applicable). Peer review assignments can only be submitted and reviewed once your session has begun. If you choose to explore the course without purchasing, you may not be able to access certain assignments."
    },
    {
      question: "When will I have access to the lectures and assignments?",
      answer: "Once you enroll for a Certificate, you’ll have access to all videos, quizzes, and programming assignments (if applicable). Peer review assignments can only be submitted and reviewed once your session has begun. If you choose to explore the course without purchasing, you may not be able to access certain assignments."
    },
    {
      question: "When will I have access to the lectures and assignments?",
      answer: "Once you enroll for a Certificate, you’ll have access to all videos, quizzes, and programming assignments (if applicable). Peer review assignments can only be submitted and reviewed once your session has begun. If you choose to explore the course without purchasing, you may not be able to access certain assignments."
    },
    {
      question: "When will I have access to the lectures and assignments?",
      answer: "Once you enroll for a Certificate, you’ll have access to all videos, quizzes, and programming assignments (if applicable). Peer review assignments can only be submitted and reviewed once your session has begun. If you choose to explore the course without purchasing, you may not be able to access certain assignments."
    },
    {
      question: "When will I have access to the lectures and assignments?",
      answer: "Once you enroll for a Certificate, you’ll have access to all videos, quizzes, and programming assignments (if applicable). Peer review assignments can only be submitted and reviewed once your session has begun. If you choose to explore the course without purchasing, you may not be able to access certain assignments."
    }
  ];
  private set = [];
  private label = [];

  switchset(i){
      this.set[i] += 1;
      if(this.set[i]%2==0){
        this.label[i] = "arrow-forward";
      } else {
        this.label[i] = "arrow-down";
      }
  }

  ngOnInit() {
  }

}
