import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService: AuthService, private router: Router) { 
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 
  }

  isSuccessful = false;
  isSignUpFailed = false;
  

  ngOnInit() {}
  
  signUpUser() {
    console.log("reactive form subitted");

    const val = this.signupForm.value;

    // if(val.name && val.surname && val.email && val.password){
      this.authService.signup(val.name, val.surname, val.email, val.password).subscribe(
        () => {
          // this.router.navigateByUrl('Login');
          this.isSuccessful = true;
        this.isSignUpFailed = false;
        }
      )
    // }
  }
 
 
  // user = {
  //   email: 'a@a.com',
  //   password: 'aaa',
  //   name: 'aaa',
  //   surname: 'a'
  // };

  // form: any = { 
  //   name: null,
  //   surname: null,
  //   email: null,
  //   password: null,
  // };

  // isSuccessful = false;
  // isSignUpFailed = false;

  // form = new FormGroup({
  //   name: new FormControl("", Validators.required),
  //   surname: new FormControl("", Validators.required),
  //   email: new FormControl("", Validators.required),
  //   password: new FormControl("", Validators.required),
  // });


  // onSubmit() {
  //   console.log("reactive form subitted");
  //   console.log(this.form);
  // }

  // onSubmit(): void {
  //   const { name, surname, email, password } = this.form;

  //   this.authService.register(name, surname, email, password).subscribe({
  //     next: data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     // error: err => {
  //     //   this.errorMessage = err.error.message;
  //     //   this.isSignUpFailed = true;
  //     // }
  //   });
  // }

  

  public isClicked: boolean = true;  

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  // }

  // signupUser(){
  //   this._auth.signupUser(this.signupUserData)
  // }
 
}
