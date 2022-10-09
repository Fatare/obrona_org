import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html', 
  styleUrls: ['./main-page.component.css'],

})
export class MainPageComponent implements OnInit {



  products = [
    {price: '2500,99', name:'Aparat', brand: 'ANEX', tax:'0,23'},
    {price: '500,99', name:'Telefon', brand: 'NOKIOS', tax:'0,23' },
    {price: '200,99', name:'Mikrofon', brand: 'YOTIK', tax:'0,23' }
  ];

 

  constructor() { 
  }

  ngOnInit(): void {
  }

}
