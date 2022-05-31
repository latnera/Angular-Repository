import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 50) { 
        return value.slice(0,15) + '. . .' 
    } else { 
        return value
    } 
  
  }

}
