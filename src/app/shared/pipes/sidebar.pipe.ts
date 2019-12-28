import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sidebar'
})
export class SidebarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
