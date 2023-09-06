import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    if (arg == ''){return value};
    const resultado = [];
    for(const item of value){
      if(item.Name.toLowerCase().indexOf(arg) > -1 || item.Tipo.toLowerCase().indexOf(arg) > -1 ){
        console.log(item);
        resultado.push(item);
      }
    }
    return resultado;
  }

}
