import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  products = [
    {price: '2500,99', name:'Aparat', brand: 'ANEX', tax:'0,23'},
    {price: '500,99', name:'Telefon', brand: 'NOKIOS', tax:'0,23' },
    {price: '200,99', name:'Mikrofon', brand: 'YOTIK', tax:'0,23' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
