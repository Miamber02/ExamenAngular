import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { OrderPipe } from '../../pipes/order.pipe';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() products:Product[] = [];

  ordenacion!:string;

  cambiarOrden(campo: string) {
    this.cambiarOrden=campo;
  }
}