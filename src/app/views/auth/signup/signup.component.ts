import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: 'a@a.com',
    password: 'aaa',
    name: 'aaa',
    surname: 'a'
  };

  form = new FormGroup({
    "email": new FormControl("", Validators.required),
    "name": new FormControl("", Validators.required),
    "surname": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  onSubmit() {
    console.log("reactive forn subitted");
    console.log(this.form);
  }

  public isClicked: boolean = true;
  constructor(private _auth: UserService) { }

  ngOnInit(): void {
  }

  // signupUser(){
  //   this._auth.signupUser(this.signupUserData)
  // }
 
}
