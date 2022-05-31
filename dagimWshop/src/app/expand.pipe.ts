import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expand'
})
export class ExpandPipe implements PipeTransform {

  transform(value: string): string {
    return value
  }

}
