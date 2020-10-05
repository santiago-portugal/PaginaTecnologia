import { Component, OnInit } from '@angular/core';
// import {} from '@angular/material'
 
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css',]
})
export class InicioComponent implements OnInit {
  filas = [
    {text: 'One', pepito: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', pepito: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', pepito: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', pepito: 2, rows: 1, color: '#DDBDF1'},
  ];
  public Status=0;
  public StatusProduct=0;
  public StatusService=0;

  constructor() { }

  
  ngOnInit(): void {
  }

  ChangeSecond(){
    console.log('Este es el status', this.Status)
    this.Status=2;
    console.log('Este es el status luego del cambio', this.Status)
  }
  ChangeZero(){
    console.log('Este es el status', this.Status)
    this.Status=0;
    console.log('Este es el status luego del cambio', this.Status)
  }
  ChangeTercero(){
    console.log('Este es el status', this.Status)
    this.Status=3;
    console.log('Este es el status luego del cambio', this.Status)
  }
  ChangeCuarto(){
    console.log('Este es el status', this.Status)
    this.Status=4;
    console.log('Este es el status luego del cambio', this.Status)
  }
  ChangeQuinto(){
    console.log('Este es el status', this.Status)
    this.Status=5;
    console.log('Este es el status luego del cambio', this.Status)
  }

  ChangeP1(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=6;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP2(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=7;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP3(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=8;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP4(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=9;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP5(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=10;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP6(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=11;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeP7(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=3;
    this.StatusProduct=12;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
  ChangeS1(){
    console.log('Este es el status', this.StatusProduct)
    this.Status=4;
    this.StatusService=13;
    console.log('Este es el status luego del cambio', this.StatusProduct)
  }
   ChangeS2(){
    console.log('Este es el status', this.StatusService)
    this.Status=4;
    this.StatusService=14;
    console.log('Este es el status luego del cambio', this.StatusService)
  }
 
 
}
