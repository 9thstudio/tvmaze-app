import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterShowList'})
export class FilterShowListPipe implements PipeTransform {
  transform(value : any, args?: any) : any {
    if (!args || !value) return value;
    return value.filter(v => v && 
      v.show && 
      v.show.network && 
      v.show.network.name.toLowerCase().includes(args.toLowerCase()) || 
      v.name.toLowerCase().includes(args.toLowerCase())
      );
  }
}
