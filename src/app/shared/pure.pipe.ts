import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'pure',
  pure: true
})
export class PurePipe implements PipeTransform {

  transform(data: number[]) {
    return data.filter(s=>s%2===0);
  }

}