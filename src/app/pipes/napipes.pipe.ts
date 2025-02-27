import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nAPipes',
})
export class NAPipesPipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (value == '' || value == null || value == undefined) {
      return 'NA';
    } else {
      return value;
    }
  }
}
