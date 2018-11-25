import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import {estados,eQuestion} from './Maquinas/Estado.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estados=estados
  eQuestion=eQuestion
  estado:Number
  estadoE:Number
  entrada
  salir
  end
  text:string
  url:string
  


  constructor(){
    this.estado=0
    this.entrada=""
    this.estadoE=0;
    this.salir=false
    this.end=false
    this.text=this.eQuestion[this.estado]
    this.url=''
  }

  reset(){
    this.constructor()
  }

  onSubmit(f: NgForm){
    this.entrada=JSON.stringify(f.value.text)
    this.entrada=this.entrada.toUpperCase()
    this.readSimbolo()
    this.changeStatus()
    f.reset()
  }

  changeStatus(){
    console.log(`ESTADOS[${this.estado}][${this.estadoE}]: `+estados[this.estado][this.estadoE])
     this.estado=estados[this.estado][this.estadoE]
     if(this.estado==null){
       this.salir=true;
       document.body.style.background = "url('https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
     }
    if(estados[this.estado][16] == 333){
      this.end=true;
      this.musicOpen()
      window.open(this.url);
    }
    this.text=eQuestion[this.estado]  
  }

  musicOpen(){
    switch (this.estado) {
      case 15:
        this.url="https://www.youtube.com/watch?v=Nc__GxDWEPo&list=PLPYyjd0hXsuqcBM9qtvIzsEYv79NDYcvv"
      break;
      case 16:
        this.url="https://www.youtube.com/watch?v=Nc__GxDWEPo&list=PLPYyjd0hXsuqcBM9qtvIzsEYv79NDYcvv"
      break;
      case 17:
         this.url="https://www.youtube.com/watch?v=Mm7muPjevik&list=PLPYyjd0hXsuqhxHnxJ3i9b_Zuejs9KucV"
      break;
      case 18:
        this.url="https://www.youtube.com/watch?v=Mm7muPjevik&list=PLPYyjd0hXsuqhxHnxJ3i9b_Zuejs9KucV"
      break;
      case 19:
        this.url="https://www.youtube.com/watch?v=I_izvAbhExY&list=PLPYyjd0hXsuo1QGjWXlllHR6dSoP6I3T8"
      break;
      case 20:
        this.url="https://www.youtube.com/watch?v=I_izvAbhExY&list=PLPYyjd0hXsuo1QGjWXlllHR6dSoP6I3T8"
      break;
      case 21:
        this.url="https://www.youtube.com/watch?v=BokdSWC2R68&list=PLPYyjd0hXsupC6COI5WHdETMuYDT7kLt3&t=0s&index=2"
      break;
      case 22:
        this.url="https://www.youtube.com/watch?v=BokdSWC2R68&list=PLPYyjd0hXsupC6COI5WHdETMuYDT7kLt3&t=0s&index=2"
      break;
      case 24:
        this.url="https://www.youtube.com/watch?v=5IpYOF4Hi6Q&t=0s&list=PLPYyjd0hXsupgKSB_UMebtgW12e7_aFgA&index=2"
      break;
      case 25:
        this.url="https://www.youtube.com/watch?v=oofSnsGkops&list=PLPYyjd0hXsuqNn6WrDn1xmMt96iyWWLFp"
      break;
      case 26:
        this.url="https://www.youtube.com/watch?v=60ItHLz5WEA&list=PLPYyjd0hXsuoR7vwK9JAKGXSPRWi69qOt"
      break;
    
      default:
        break;
    }
  }

  readSimbolo(){
 
    switch (this.entrada) {
      case '"BIEN"':
        this.estadoE=0
       break;
      case '"MAL"':
        document.body.style.backgroundImage= "url('https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
        this.estadoE=1
       break;
      case '"CALMADO"':
        this.estadoE=2
       break;
      case '"SERENO"':
        this.estadoE=3
       break;
      case '"CONTENTO"':
        this.estadoE=4
       break;
      case '"FELIZ"':
        this.estadoE=5
       break;
      case '"ALEGRE"':
        this.estadoE=6
       break;
      case '"ALERTA"':
        this.estadoE=7
       break;
      case '"TENSO"':
        this.estadoE=8
       break;
      case '"NERVIOSO"':
        this.estadoE=9
       break;
      case '"ESTRESADO"':
        this.estadoE=10
       break;
      case '"MOLESTO"':
        this.estadoE=11
       break;
      case '"TRISTE"':
        this.estadoE=12
       break;
      case '"DEPRIMIDO"':
        this.estadoE=13
       break;
      case '"SI"':
        this.estadoE=14
       break;
      case '"NO"':
        this.estadoE=15
       break;
        
      default:
        this.estadoE=null
    }
  }
}
