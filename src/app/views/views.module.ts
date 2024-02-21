import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoAccesComponent } from './no-acces/no-acces.component';
import { InfoProductComponent } from './info-product/info-product.component';
import { ListComponent } from './list/list.component';
import { ComponentsWModule } from '../components-w/components-w.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    NoAccesComponent,
    InfoProductComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsWModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    NoAccesComponent,
    InfoProductComponent,
    ListComponent
  ]
})
export class ViewsModule { }
