import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  public courses;
  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;

  async getcourses(){
    return await this.courseService.getCourseByUploader().toPromise();
  }

  constructor(private platform: Platform,
              public formBuilder: FormBuilder,
              private toastController: ToastController,
              private courseService: CourseService
              ) {

    this.form1 = formBuilder.group({
	        name: [''],
	        info: [''],
	        branch: ['']
	    });
    this.form2 = formBuilder.group({
	        id: [''],
	        branch: ['']
	    });
    this.form3 = formBuilder.group({
          id: [''],
	        name: [''],
	        info: [''],
	        branch: ['']
	    });
  }

  ngOnInit() {
  }

  submit1() {
    this.courseService.addCourse(this.form1.value).subscribe(
      res => {
        if(res["status"]){
          this.presentToast(`Course added successfully`);
        } else {
          this.presentToast(`Course not added`);
          console.log(res['message']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  submit2(){
    this.courseService.removeCourse(this.form2.value.id).subscribe(
      res => {
        if(res["status"]){
          this.presentToast(`Course deleted successfully`);
        } else {
          this.presentToast(`Course not deleted`);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  submit3(){
    this.courseService.updateCourse(this.form3.value.id, this.form3.value).subscribe(
      res => {
        if(res["status"]){
          this.presentToast(`Course updated successfully`);
        } else {
          this.presentToast(`Course not updated`);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  ionViewWillEnter(){
    this.courses = this.getcourses();
  }

}
