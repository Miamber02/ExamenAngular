import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { ListComponent } from './views/list/list.component';
import { InfoProductComponent } from './views/info-product/info-product.component';
import { NoAccesComponent } from './views/no-acces/no-acces.component';

const routes: Routes = [
  { path:'sign-in', component:LoginComponent},
  { path:'list', component:ListComponent},
  { path:'info-product/:id', component:InfoProductComponent},
  { path:'error', component:NoAccesComponent},
  { path:'##', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
