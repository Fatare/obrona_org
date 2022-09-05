import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isClicked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public test(){
    return 'fas fa-eye-slash eye-icon';
  }

}
