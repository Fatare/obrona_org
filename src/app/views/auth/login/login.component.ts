import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
    console.log("reactive form subitted");
    console.log(this.form);
  }


  public isClicked: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
