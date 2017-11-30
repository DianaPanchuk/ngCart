import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(values: any, filterString: string): any {
    if (values.length === 0 || filterString === '') {
      return values;
    }
    const resultArray = [];
    values.forEach((item) => {
      if (item.id.toLocaleTimeString().includes(filterString)) {
        resultArray.push(item);
      }
    });
    return resultArray;
  }
}
