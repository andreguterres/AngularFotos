import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Cada item desse array é um objeto photo
  photos: Object[] = [];

  constructor(http: HttpClient) {

    //const observable = http.get('http://localhost:3000/flavio/photos');
    //observable busca os dados inscritos nele ( Buscando da WebAPi). O observable vem do rx.js
    //feito para trabalhar com perações assincronas.
    //observable.subscribe(); 
    // Mas pode fazer direto =>

    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos);
  }
}

