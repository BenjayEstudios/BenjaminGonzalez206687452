import { Component, OnInit } from '@angular/core';
// se importa el servicio que contiene la Api
import { Evaluacion2ApiService } from '../services/evaluacion2-api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// implementacion de Oninit
export class HomePage implements OnInit{
  items: any[] = []
  constructor(private evaluacion2api : Evaluacion2ApiService) {}
  ngOnInit() {

    

    this.evaluacion2api.getInfo().subscribe((data) =>{

      this.items = data
      console.log(this.items)
      localStorage.setItem('api',JSON.stringify(this.items))
    })
  }
}
