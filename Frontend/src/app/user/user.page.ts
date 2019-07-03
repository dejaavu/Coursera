import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user = {
    name: 'USER',
    email: 'user@user.com',
    branch: 'BranchTemp',
  };

  public form1: FormGroup;

  user = {
    name: 'USER',
    email: 'user@user.com',
    branch: 'BranchTemp',
  };

  constructor(public formBuilder: FormBuilder) {
    this.form1 = formBuilder.group({
	        name: [''],
	        info: [''],
	        location: [''],
          skills: [''],
          gender: [''],
          dateofbirth: [''],
	    });

  }

  ngOnInit() {
  }

}
