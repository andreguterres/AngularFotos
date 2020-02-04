import { Component, Input } from "@angular/core";

//Component é um objeto javaScript
@Component({
  //prefixo ap pq é as iniciais do nome do projeto "AngularFotos"
  selector:'af-photo',
  templateUrl:'photo.component.html'
})

export class PhotoComponent {

  //@Input() Inbound properties aceitam receber um valor através da forma declarativa do documento
  @Input() description = '';
  @Input() url = '';
}
