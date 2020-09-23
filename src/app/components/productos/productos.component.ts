import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input("StatusProduct") public StatusProduct;
 
  constructor() { }
  // public StatusProduct=0;


  ngOnInit(): void {
  }
  ChangeP1(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=6;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP2(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=7;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP3(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=8;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP4(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=9;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP5(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=10;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP6(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=11;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP7(){
    console.log('Este es el status', this.StatusProduct)
    this.StatusProduct=12;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }

}
