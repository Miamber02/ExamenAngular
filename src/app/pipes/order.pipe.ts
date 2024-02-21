 import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Product[],campo: string): Product[] {
    switch (campo) {
      case 'precio ascendente':
        return value.sort((a,b)=>a.price>b.price?1:-1);
        break;
      case 'precio descendente':
        return value.sort((a,b)=>a.price<b.price?-1:1);
        break;
      default:
        return value;
    }
  }

}
 