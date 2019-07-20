import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { GetcoursePipe } from "./getcourse.pipe";

@NgModule({
  declarations: [GetcoursePipe],
  imports: [IonicModule],
  exports: [GetcoursePipe]
})
export class PipesModule {}
