import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from '../../services/autentication.service';

declare var google:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,AfterViewInit {

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder,private loginPrd:AutenticationService, private routerprd:Router) { }
  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "696552185291-tfmdrb46sbfgi7gsu7agtnnq4ogspe8r.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } 
    );
    google.accounts.id.prompt();
  }

  ngOnInit(): void {
    // console.log("se encuentra");
    console.log(this.routerprd);
    this.myForm = this.createMyForm();
  }


  handleCredentialResponse(response:any){
    console.log(response);
    console.log(this.routerprd);
    if(response.credential){
      sessionStorage.setItem("token",response.credential);
      document.location.href = "/sesion/principal";
    }
  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }

  public submitForm(){
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }

     if(!this.loginPrd.enterAply(this.myForm.value)){
      console.log(this.myForm.value);
          alert("Usuario o contraseña invalido");
     }else{
        alert("Accediendo...");
        this.routerprd.navigateByUrl("/list");
     }
  }

  public get f():any{
    return this.myForm.controls;
  }

}
