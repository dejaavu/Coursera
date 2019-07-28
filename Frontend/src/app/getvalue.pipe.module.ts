import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { GetvaluePipe } from "./getvalue.pipe";

@NgModule({
  declarations: [GetvaluePipe],
  imports: [IonicModule],
  exports: [GetvaluePipe]
})
export class PipesModule {}
