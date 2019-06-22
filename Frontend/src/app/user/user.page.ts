import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public form1: FormGroup;
  public form2: FormGroup;
  private websiteCount: number = 0;

  constructor(public formBuilder: FormBuilder) {
    this.form1 = formBuilder.group({
	        name: [''],
	        info: [''],
	        location: [''],
          skills: [''],
          gender: [''],
          dateofbirth: [''],
	    });
    this.form2 = formBuilder.group({

	    });
  }

  ngOnInit() {
  }

  removeWebsite(control){
    this.websiteCount--;
    this.form2.removeControl(control.key);
  }

  addWebsite(){
    this.websiteCount++;
    this.form2.addControl('Website ' + this.websiteCount, new FormControl(''));
  }

}
