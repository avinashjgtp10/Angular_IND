import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString',
  pure:true
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let newStr: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    console.log("change")
    return newStr;
  }

}
