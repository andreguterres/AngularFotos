import { Component } from "@angular/core";

//Component é um objeto javaScript
@Component({
  //prefixo ap pq é as iniciais do nome do projeto "AngularFotos"
  selector:'af-photo',
  templateUrl:'photo.component.html'
})

export class PhotoComponent {
  description = 'Leão';
  url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg';
}
