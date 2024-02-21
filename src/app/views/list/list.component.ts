import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products:Product[] = [];

    constructor(private productService:ProductService) { 
      this.search();
    }
  
    search() {
      try {
        this.productService.postmanPetitionProductsList().subscribe(data => {
          this.products=data;
          console.log(this.products);
        })
      } catch {
        console.log("Error en el ts de list");
      }
    }
  }