import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  private enter:boolean = false;

  constructor() { }


  public  enterAply(obj:any):boolean{
    if(obj.usuario == 'apruebo_angular@mail.com' && obj.password=='RooT') { //apruebo_angular@mail.com
      this.enter = true;
    }
      return this.enter;
  }

  public enableLogin(){
    return this.enter;
  }


  public getAutenticationByToken(){
    return sessionStorage.getItem("token");
  }

  public clearToken(){
    return sessionStorage.setItem("token",'');
  }
}
