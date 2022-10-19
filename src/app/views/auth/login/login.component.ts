import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  logInForm: FormGroup;

  constructor(private fb:FormBuilder, 
    private authService: AuthService, 
    private router: Router) {

this.logInForm = this.fb.group({
email: ['',Validators.required],
password: ['',Validators.required]
});
}
  // logInForm: any = {
  //   username: null,
  //   password: null
  // };
  // isLoggedIn = false;
  // isLoginFailed = false;
  // roles: string[] = [];
  // user = {
  //   email: 'a@a.com',
  //   password: 'aaa',
  //   name: 'aaa',
  //   surname: 'a'
  // };

  // form = new FormGroup({
  //   "email": new FormControl("", Validators.required),
  //   "name": new FormControl("", Validators.required),
  //   "surname": new FormControl("", Validators.required),
  //   "password": new FormControl("", Validators.required),
  // });

  // constructor(private authService: AuthService, private storageService: TokenStorageService) { }
  
  public isClicked: boolean = true;
  ngOnInit() {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
  }

  logInUser(): void {

    const val= this.logInForm.value;

    if(val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe (
        () => {
          console.log("User is logged in now");
          this.router.navigateByUrl('mainPage');
        }
      )
    }
    // const { email, password } = this.logInForm;

    // this.authService.login(email, password).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     this.reloadPage();
    //   }
    // });
    // console.log("reactive form subitted");
    // console.log(this.form);
  }

  reloadPage(): void {
    window.location.reload();
  }
  }
