import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';
  userName;
  userAge;
  userContact;
  userCity;
  userModel = new User ('Anonymous', 123456789, 19, 'Mumbai');
  constructor( private enrollmentService: EnrollmentService ){}
  onSubmit() {
    // this.enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Success!', data),
    //   error => console.error('error!', error)
    // );
    this.userName = JSON.stringify(this.userModel.fullname);
    this.userAge = JSON.stringify(this.userModel.age);
    this.userContact = JSON.stringify(this.userModel.contact);
    this.userCity = JSON.stringify(this.userModel.city);
  }
}
