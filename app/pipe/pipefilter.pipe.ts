import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(value : any[] , filterstring : string , propName:string) : any{
    const result : any=[];
    if(!value || filterstring == '' || propName == ''){
      return value;
    }else{
      value.forEach((a:any)=>{
        if(a[propName].trim().toLocaleLowerCase().includes(filterstring.toLocaleLowerCase())){
          result.push(a);
        }
      })
    }
    return result;
  }

}
