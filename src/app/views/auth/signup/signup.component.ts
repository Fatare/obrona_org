import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  public isClicked: boolean = true;
  signupUserData = {}
  constructor(private _auth: UserService) { }

  ngOnInit(): void {
  }

  // signupUser(){
  //   this._auth.signupUser(this.signupUserData)
  // }
 
}
