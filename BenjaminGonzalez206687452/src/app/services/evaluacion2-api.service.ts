import { Injectable } from '@angular/core';
// Nuevas importaciones
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Se generan las interfaces
// interface datos{
//   items: test[]
// }

interface datos {
  userId: number
  id: number
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})



export class Evaluacion2ApiService {
  // Creacion de la url
  private url = 'https://jsonplaceholder.typicode.com/posts/'
  
  // Inclusion de http como HttpClient 
  constructor( private http : HttpClient) { }
  // Creacion de la funcion
  getInfo():Observable<datos[]>{
    return this.http.get<datos[]>(this.url)
  }

}
