import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-info-product',
  templateUrl: './info-product.component.html',
  styleUrl: './info-product.component.css'
})
export class InfoProductComponent implements OnInit{

  objectProduct?:Product;

  constructor(private service:ProductService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit():void{ 
    this.activeRoute.params.pipe( //Peticion
      switchMap( ({ id }) => this.service.postmanPetitionOneProduct( id )) 
    ).subscribe(data=>{
      if(!data/*Si no tiene datos*/) {
        return this.router.navigateByUrl(''); // SI no tiene datos va a la ruta por defecto
      }
      console.log('objectProduct: ', data);
      return this.objectProduct=data;
    });
  }

}
