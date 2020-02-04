import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  //Declration funciona como private e o exports como método público. Senão der acesso
  //o PhotoComponent não será acessado pelo app.module.
  declarations: [PhotoComponent],
  exports: [PhotoComponent] 
  
})
export class PhotosModule {}
