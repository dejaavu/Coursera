import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getvalue'
})
export class GetvaluePipe implements PipeTransform {

  constructor() {

    }

  transform(value: any, tag: any): any {
    return value[tag];
  }

}
