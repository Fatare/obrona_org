import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html', 
  styleUrls: ['./main-page.component.css'],

})
export class MainPageComponent implements OnInit {
  productList:any;


  //products = [
  //  {price: '2500,99', name:'Aparat', brand: 'ANEX', tax:'0,23'},
    //{price: '500,99', name:'Telefon', brand: 'NOKIOS', tax:'0,23' },
    //{price: '200,99', name:'Mikrofon', brand: 'YOTIK', tax:'0,23' }
  //];

 

  constructor(private api:ApiService,
    private cartApi:CartapiService) { 
  }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      })
    })
  }

  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }

}
