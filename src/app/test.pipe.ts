import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(p:any, wish: string): string {
    if(p.gender=="male"){
      return `Hello Mrs ${p.name} ${wish}`
    }
    else {
      return `Hello Miss $(p.name) $(wish)`
    }
    
  }

}
